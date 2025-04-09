import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

// Configure WebSocket constructor for Neon
neonConfig.webSocketConstructor = ws;

// Enhanced database URL validation
function validateDatabaseConfig() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    const availableEnvVars = Object.keys(process.env)
      .filter(key => !key.toLowerCase().includes('key') && !key.toLowerCase().includes('secret'))
      .join(', ');
    console.error('Critical: DATABASE_URL is not set in environment');
    console.error('Available environment variables:', availableEnvVars);
    throw new Error('DATABASE_URL environment variable is required');
  }
  return url;
}

// Configure connection pool with optimal settings for serverless
const pool = new Pool({
  connectionString: validateDatabaseConfig(),
  connectionTimeoutMillis: 10000, // 10 second timeout
  max: 20, // maximum number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  keepAlive: true
});

// Enhanced database initialization with better error handling
async function initializeDatabase() {
  const maxRetries = 5;
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  let retries = maxRetries;

  while (retries > 0) {
    try {
      const client = await pool.connect();
      console.log('Successfully connected to database');
      client.release();
      return true;
    } catch (err) {
      retries--;
      console.error(`Database connection attempt ${maxRetries - retries}/${maxRetries} failed:`, err);

      if (retries === 0) {
        console.error('Failed to connect to database after multiple attempts');
        if (process.env.NODE_ENV === 'development') {
          console.error('Database URL format (redacted):', process.env.DATABASE_URL.replace(/\/\/[^@]+@/, '//****@'));
        }
        return false;
      }

      console.log(`Retrying database connection in 2 seconds... (${retries} attempts remaining)`);
      await delay(2000); // Increased delay between retries
    }
  }
  return false;
}

// Initialize database connection with enhanced error handling
initializeDatabase()
  .then(success => {
    if (!success) {
      console.error('Database initialization failed - application may have limited functionality');
    }
  })
  .catch(err => {
    console.error('Unexpected error during database initialization:', err);
    console.error('Application will continue with limited functionality');
  });

// Export database instance with schema
export const db = drizzle(pool, { schema });