import { runningPlans } from "@/lib/runningPlans";

export async function GET() {
  return Response.json(runningPlans);
}