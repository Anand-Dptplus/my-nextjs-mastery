import { getConnection } from '@/lib/db';
import { verifyToken } from '@/lib/middleware/auth';
import { authorize } from '@/lib/middleware/authorize';

export async function GET(req, { params }) {
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

  try {
    const db = await getConnection();
    const result = await db.request().input('id', studentId).execute('spSMGetAllStudents');

    if (result.recordset.length === 0) {
      return Response.json({ error: 'Student not found' }, { status: 404 });    
    }

    return Response.json({ student: result.recordset[0] }, { status: 200 });
  } catch (err) {
    console.error('Get Student Error:', err);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
