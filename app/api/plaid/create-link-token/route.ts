import { NextResponse } from 'next/server'
import { plaidClient } from '@/lib/plaid'

 
export async function GET(request: Request) {
  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
}

export async function POST(request: Request) {
  try {
    const response = await fetch('/api/plaid/create-link-token', {
      method: 'POST',
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error_message || 'Failed to create link token');
    }
    return NextResponse.json({ linkToken: data.link_token });
  } catch (error: any) {
    console.error('Error creating link token:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


