import { progressionData } from "@/lib/progression";

export async function GET() {
  return Response.json(progressionData);
}