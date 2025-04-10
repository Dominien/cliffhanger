import { Request, Response } from 'express';

export default function handler(req: Request, res: Response) {
  res.status(200).json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || 'development'
  });
}