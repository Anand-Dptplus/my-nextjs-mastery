export function authorize(user, roles = []) {
  if (!roles.includes(user.role)) {
    return { status: 403, error: 'Forbidden: Access denied' };
  }

  return { status: 200 };
}
