import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest) {
  let users = [
    {
      id: '3ec5a3cc-026d-4e7f-af87-0f3ed29dd993',
      value: 20000,
      direction: 'outbound',
      bank: 'Banco do Brasil',
    },
    {
      id: 'b89c3917-4018-472c-8cb2-b596480cc84c',
      value: 30000,
      direction: 'outbound',
      bank: 'Banco do Brasil',
    },
    {
      id: '4cd1978f-75fc-46ba-ac9b-b861245d9455',
      value: 40000,
      direction: 'outbound',
      bank: 'Banco do Brasil',
    },
  ];

  try {
    // DO STUFF
    users.push({
      id: '6a0edd5e-5e19-4195-a2c6-5ea45998dfda',
      value: 50000,
      direction: 'outbound',
      bank: 'Banco do Brasil',
    })
  } catch(e) {
    console.error(e);
  }

  return NextResponse.json(users);
}