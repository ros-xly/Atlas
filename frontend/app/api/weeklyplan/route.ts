import { weeklyPlan } from "@/lib/weeklyPlan";

export async function GET() {
  return Response.json(weeklyPlan);
}