import {
  getUsers,
  saveUsers,
} from "@/lib/userStorage";

export async function POST(
  request: Request
) {
  const data = await request.json();

  const users = getUsers();

  const user = {
    id: Date.now(),
    name: data.name,
    email: data.email,
    password: data.password,
  };

  users.push(user);

  saveUsers(users);

  return Response.json({
    success: true,
  });
}