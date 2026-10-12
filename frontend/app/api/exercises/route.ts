import { exercises } from "@/lib/exercises";

export async function GET() {
  return Response.json(exercises);
}
``