import { goals } from "@/lib/goals";

export async function GET() {
  return Response.json(goals);
}