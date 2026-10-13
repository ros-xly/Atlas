import { conditioningExercises } from "@/lib/conditioningExercises";

export async function GET() {
  return Response.json(conditioningExercises);
}