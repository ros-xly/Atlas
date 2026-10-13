import { getUsers } from "@/lib/userStorage";

export async function POST(
  request: Request
) {
  const data = await request.json();

  const users = getUsers();

  const user = users.find(
    (u: any) =>
      u.email === data.email &&
      u.password === data.password
  );

  return Response.json({
    success: !!user,
    user,
  });
}