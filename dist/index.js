// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/openai-service.ts
import OpenAI from "openai";
var openai;
try {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || "dummy-key-for-initialization"
  });
} catch (error) {
  console.error("Failed to initialize OpenAI client:", error);
  openai = {};
}
async function generateChatResponse(message) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      console.warn("OPENAI_API_KEY not set, returning default chatbot response");
      return "Unser Chatbot ist derzeit in Wartung. Bitte versuchen Sie es sp\xE4ter erneut oder buchen Sie einen kostenlosen Beratungstermin! [CTA_BUTTON]";
    }
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "Du bist ein hilfreicher digitaler Assistent f\xFCr Cliffhanger, ein Unternehmen f\xFCr digitale Transformation.\n\nPers\xF6nlichkeit:\n- Professionell und l\xF6sungsorientiert\n- Fokus auf Kundenverst\xE4ndnis\n\nKommunikationsregeln:\n- Halte Antworten sehr kurz (1-2 S\xE4tze)\n- Frage nach konkreten Bed\xFCrfnissen\n- Antworte auf Deutsch\n- Erw\xE4hne den kostenlosen Beratungscall bei Interesse\n- Nutze [CTA_BUTTON] f\xFCr Call-to-Action\n\nBeispiel-CTAs:\n- 'Lassen Sie uns Ihre Ziele im kostenlosen Call besprechen! [CTA_BUTTON]'\n- 'Ich zeige Ihnen gerne konkrete L\xF6sungen! [CTA_BUTTON]'"
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 150
    });
    return response.choices[0].message.content || "I apologize, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return "Unser Chatbot ist derzeit in Wartung. Bitte versuchen Sie es sp\xE4ter erneut oder buchen Sie einen kostenlosen Beratungstermin! [CTA_BUTTON]";
  }
}

// shared/schema.ts
import { z } from "zod";
var insertLeadResponseSchema = z.object({
  businessType: z.enum(["ecommerce", "service", "saas", "other"]),
  projectTimeline: z.enum(["immediate", "next_quarter", "planning"]),
  projectGoals: z.enum([
    "increase_sales",
    "improve_support",
    "automate_faq",
    "lead_generation",
    "other"
  ]),
  firstName: z.string().min(2, "Please enter your first name"),
  lastName: z.string().min(2, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  website: z.string().url("Please enter a valid website URL").optional(),
  companyName: z.string().min(2, "Please enter a valid company name").optional(),
  currentChatbot: z.boolean().optional(),
  privacyAccepted: z.literal(true, {
    errorMap: () => ({ message: "Please accept the privacy policy" })
  })
});
var insertFunnelResponseSchema = z.object({
  businessType: z.enum(["service", "business"], {
    errorMap: () => ({ message: "Please select your business type" })
  }),
  selectedService: z.enum(["landing_page", "chatbot", "media", "complete"], {
    errorMap: () => ({ message: "Please select a service" })
  }),
  projectTimeline: z.enum(["immediate", "next_quarter", "planning"], {
    errorMap: () => ({ message: "Please select your project timeline" })
  }),
  projectGoals: z.enum([
    "increase_sales",
    "improve_support",
    "automate_faq",
    "lead_generation",
    "other"
  ], {
    errorMap: () => ({ message: "Please select your project goals" })
  }),
  firstName: z.string().min(2, "Please enter your first name"),
  lastName: z.string().min(2, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  website: z.string().url("Please enter a valid website URL").optional(),
  companyName: z.string().min(2, "Please enter a valid company name").optional(),
  message: z.string().optional(),
  privacyAccepted: z.literal(true, {
    errorMap: () => ({ message: "Please accept the privacy policy" })
  })
});

// server/routes.ts
import { Resend } from "resend";
var resend;
try {
  resend = new Resend(process.env.RESEND_API_KEY || "dummy-key");
} catch (error) {
  console.error("Failed to initialize Resend:", error);
  resend = {};
}
async function registerRoutes(app2) {
  const httpServer = createServer(app2);
  app2.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }
      const botResponse = await generateChatResponse(message);
      res.json({ response: botResponse });
    } catch (error) {
      console.error("Error in chat endpoint:", error);
      res.status(500).json({
        error: "Es gab einen Fehler bei der Verarbeitung deiner Nachricht."
      });
    }
  });
  app2.post("/api/lead-responses", async (req, res) => {
    try {
      const data = insertLeadResponseSchema.parse(req.body);
      console.log("Received lead response:", JSON.stringify(data));
      if (process.env.RESEND_API_KEY) {
        try {
          const emailResult = await resend.emails.send({
            from: "onboarding@resend.dev",
            // Update with your verified domain
            to: process.env.NOTIFICATION_EMAIL || "your-email@example.com",
            subject: "New Lead Response",
            html: `
              <h1>New Lead Response</h1>
              <h2>Business Information</h2>
              <p><strong>Business Type:</strong> ${data.businessType}</p>
              <p><strong>Project Timeline:</strong> ${data.projectTimeline}</p>
              <p><strong>Project Goals:</strong> ${data.projectGoals}</p>
              
              <h2>Contact Information</h2>
              <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              ${data.companyName ? `<p><strong>Company:</strong> ${data.companyName}</p>` : ""}
              ${data.website ? `<p><strong>Website:</strong> ${data.website}</p>` : ""}
              ${data.currentChatbot !== void 0 ? `<p><strong>Has Current Chatbot:</strong> ${data.currentChatbot ? "Yes" : "No"}</p>` : ""}
              
              <p><strong>Submission Time:</strong> ${(/* @__PURE__ */ new Date()).toISOString()}</p>
            `
          });
          console.log("Email sent successfully:", emailResult);
        } catch (emailError) {
          console.error("Failed to send email notification:", emailError);
        }
      } else {
        console.warn("RESEND_API_KEY not set, skipping email notification");
      }
      res.json({
        id: Math.floor(Math.random() * 1e4),
        ...data,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (error) {
      console.error("Error in /api/lead-responses:", error);
      if (error instanceof Error) {
        res.status(400).json({
          message: error.message,
          type: error.name
        });
      } else {
        res.status(500).json({
          message: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es sp\xE4ter erneut.",
          type: "UnknownError"
        });
      }
    }
  });
  app2.post("/api/funnel-responses", async (req, res) => {
    try {
      const data = insertFunnelResponseSchema.parse(req.body);
      console.log("Received funnel response:", JSON.stringify(data));
      if (process.env.RESEND_API_KEY) {
        try {
          const emailResult = await resend.emails.send({
            from: "onboarding@resend.dev",
            // Update with your verified domain
            to: process.env.NOTIFICATION_EMAIL || "your-email@example.com",
            subject: "New Funnel Response",
            html: `
              <h1>New Funnel Response</h1>
              <h2>Service Information</h2>
              <p><strong>Business Type:</strong> ${data.businessType}</p>
              <p><strong>Selected Service:</strong> ${data.selectedService}</p>
              <p><strong>Project Timeline:</strong> ${data.projectTimeline}</p>
              <p><strong>Project Goals:</strong> ${data.projectGoals}</p>
              
              <h2>Contact Information</h2>
              <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              ${data.companyName ? `<p><strong>Company:</strong> ${data.companyName}</p>` : ""}
              ${data.website ? `<p><strong>Website:</strong> ${data.website}</p>` : ""}
              ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ""}
              
              <p><strong>Submission Time:</strong> ${(/* @__PURE__ */ new Date()).toISOString()}</p>
            `
          });
          console.log("Email sent successfully:", emailResult);
        } catch (emailError) {
          console.error("Failed to send email notification:", emailError);
        }
      } else {
        console.warn("RESEND_API_KEY not set, skipping email notification");
      }
      res.json({
        id: Math.floor(Math.random() * 1e4),
        ...data,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (error) {
      console.error("Error in /api/funnel-responses:", error);
      if (error instanceof Error) {
        res.status(400).json({
          message: error.message,
          type: error.name
        });
      } else {
        res.status(500).json({
          message: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es sp\xE4ter erneut.",
          type: "UnknownError"
        });
      }
    }
  });
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2, { dirname as dirname2 } from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [react(), runtimeErrorOverlay(), themePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = dirname2(__filename2);
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const projectRoot = path2.resolve(__dirname2, "..");
  const distPath = path2.resolve(projectRoot, "dist/public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const PORT = 5e3;
  server.listen(PORT, "0.0.0.0", () => {
    log(`serving on port ${PORT}`);
  });
})();
