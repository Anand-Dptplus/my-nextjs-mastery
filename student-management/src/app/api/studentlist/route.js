import { getConnection } from '@/lib/db';
import { verifyToken } from '@/lib/middleware/auth';
import { authorize } from '@/lib/middleware/authorize';

export async function GET(req) {
  const tokenResult = verifyToken(req);
  if (tokenResult.status !== 200) {
    return Response.json({ error: tokenResult.error }, { status: tokenResult.status });
  }

  const user = tokenResult.user;
  const roleCheck = authorize(user, ['admin']);
  if (roleCheck.status !== 200) {
    return Response.json({ error: roleCheck.error }, { status: roleCheck.status });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  try {
    const db = await getConnection();

    const result = await db
      .request()
      .input('id', id ? parseInt(id) : null)
      .execute('spSMGetAllStudents'); // same procedure for both all + by id

    if (id && result.recordset.length === 0) {
      return Response.json({ error: 'Student not found' }, { status: 404 });
    }

    return Response.json(
      id ? { student: result.recordset[0] } : { students: result.recordset },
      { status: 200 }
    );
  } catch (err) {
    console.error('Fetch Error:', err);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
