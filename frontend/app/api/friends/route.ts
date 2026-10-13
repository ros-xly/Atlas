import { getFriends } from "@/lib/friendStorage";

export async function GET() {
  return Response.json(
    getFriends()
  );
}