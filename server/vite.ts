import express, { type Express } from "express";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import { nanoid } from "nanoid";

// Import vite config directly with try/catch for Vercel
let viteConfig;
try {
  // Use dynamic import to work around ESM issues
  viteConfig = await import("../vite.config.js");
  viteConfig = viteConfig.default;
} catch (error) {
  console.warn("Failed to import vite config, using fallback:", error);
  viteConfig = {
    plugins: [],
    root: path.resolve(process.cwd(), "client"),
    build: {
      outDir: path.resolve(process.cwd(), "dist/public"),
    }
  };
}

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // Get current file path in ESM-compatible way
      const currentFilePath = fileURLToPath(import.meta.url);
      const currentDir = dirname(currentFilePath);
      
      const clientTemplate = path.resolve(
        currentDir,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template;
      try {
        template = await fs.promises.readFile(clientTemplate, "utf-8");
      } catch (error) {
        console.warn(`Could not read template at ${clientTemplate}, trying fallback paths`);
        
        // Try fallback paths
        const fallbackPaths = [
          path.resolve(process.cwd(), "client/index.html"),
        ];
        
        for (const fallbackPath of fallbackPaths) {
          try {
            if (fs.existsSync(fallbackPath)) {
              template = await fs.promises.readFile(fallbackPath, "utf-8");
              break;
            }
          } catch (e) {
            // Ignore and try next path
          }
        }
        
        if (!template) {
          throw new Error(`Could not find template file`);
        }
      }
      
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  // Get current file path in ESM-compatible way
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentDir = dirname(currentFilePath);
  
  // In production, find the public directory
  let distPath: string | undefined;
  
  // Try multiple possible paths
  const possiblePaths = [
    path.resolve(currentDir, '../dist/public'),
    path.resolve(process.cwd(), 'dist/public'),
    path.resolve(process.cwd(), 'public')
  ];
  
  for (const possiblePath of possiblePaths) {
    if (fs.existsSync(possiblePath)) {
      distPath = possiblePath;
      break;
    }
  }
  
  if (!distPath) {
    console.warn('Could not find valid build directory. Static files will not be served.');
    return;
  }

  console.log(`Serving static files from: ${distPath}`);
  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    try {
      res.sendFile(path.resolve(distPath as string, "index.html"));
    } catch (error) {
      console.error('Error serving index.html:', error);
      res.status(500).send('Server Error - Could not serve static file');
    }
  });
}