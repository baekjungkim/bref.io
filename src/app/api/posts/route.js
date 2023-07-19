import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ items: [{ id: 1, title: 'hello world' }] });
}

// export async function POST() {
//   // FORM DATA
//   // API JSON POST DATA
//   return NextResponse.json({ hellow: 'abc' });
// }
