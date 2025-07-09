import { getConnection } from '@/lib/db';
import { verifyToken } from '@/lib/middleware/auth';
import { authorize } from '@/lib/middleware/authorize';

export async function POST(req) {
  const tokenResult = verifyToken(req);
  if (tokenResult.status !== 200) {
    return Response.json({ error: tokenResult.error }, { status: tokenResult.status });
  }

  const user = tokenResult.user;

  const roleCheck = authorize(user, ['admin']);
  if (roleCheck.status !== 200) {
    return Response.json({ error: roleCheck.error }, { status: roleCheck.status });
  }

  try {
    const {
      name, email, phone, age,
      gender, course, address
    } = await req.json();

    const db = await getConnection();
    const result = await db
      .request()
      .input('name', name)
      .input('email', email)
      .input('phone', phone)
      .input('age', age)
      .input('gender', gender)
      .input('course', course)
      .input('address', address)
      .input('createdBy', user.id)
      .execute('spSMInsertStudent');

    const { StatusCode, Message } = result.recordset[0];

    if (StatusCode === -1) {
      return Response.json({ error: Message }, { status: 409 });
    }

    return Response.json({ message: Message }, { status: 201 });

  } catch (err) {
    console.error('Insert Error:', err);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
