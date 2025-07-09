import { getConnection } from '@/lib/db';
import bcrypt from 'bcrypt';

export async function POST(req) {
  try {
    const { name, phone, email, password, role = 'user' } = await req.json();

    if (!name || !phone || !email || !password) {
      return Response.json({ error: 'All fields are required' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const db = await getConnection();

    const result = await db
      .request()
      .input('name', name)
      .input('phone', phone)
      .input('email', email)
      .input('password', hashedPassword)
      .input('role', role)
      .execute('spSMRegisterUser');

    const { StatusCode, Message } = result.recordset[0];

    if (StatusCode === -1) {
      return Response.json({ error: Message }, { status: 409 });
    }

    return Response.json({ message: Message }, { status: 201 });

  } catch (error) {
    console.error('Register Error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
