import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  return NextResponse.json({ status: 'ok', timestamp: new Date().toISOString() });
}