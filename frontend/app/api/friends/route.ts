import { friends } from "@/lib/friends";

export async function GET() {
  return Response.json(friends);
}