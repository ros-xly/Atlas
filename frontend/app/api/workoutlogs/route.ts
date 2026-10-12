import { workoutLogs } from "@/lib/workoutLogs";

export async function GET() {
  return Response.json(workoutLogs);
}
