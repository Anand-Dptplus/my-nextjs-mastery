import { getConnection } from '@/lib/db';
import { verifyToken } from '@/lib/middleware/auth';
import { authorize } from '@/lib/middleware/authorize';
  
  export async function PUT(req, { params }) {
  const tokenResult = verifyToken(req);
  if (tokenResult.status !== 200) {
    return Response.json({ error: tokenResult.error }, { status: tokenResult.status });
  }

  const user = tokenResult.user;
  const roleCheck = authorize(user, ['admin']);
  if (roleCheck.status !== 200) {
    return Response.json({ error: roleCheck.error }, { status: roleCheck.status });
  }

  const studentId = parseInt(params.id);
  if (isNaN(studentId)) {
    return Response.json({ error: 'Invalid student ID' }, { status: 400 });
  }

  const { name, email, phone, age, gender, course, address } = await req.json();

  try {
    const db = await getConnection();
    const result = await db
      .request()
      .input('id', studentId)
      .input('name', name)
      .input('email', email)
      .input('phone', phone)
      .input('age', age)
      .input('gender', gender)
      .input('course', course)
      .input('address', address)
      .execute('spSMUpdateStudent');

    const { StatusCode, Message } = result.recordset[0];

    if (StatusCode === -1) {
      return Response.json({ error: Message }, { status: 404 });
    }

    return Response.json({ message: Message }, { status: 200 });

  } catch (err) {
    console.error('Update Error:', err);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
