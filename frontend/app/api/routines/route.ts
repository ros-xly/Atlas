import { routines } from "@/lib/routines";

export async function GET() {
  return Response.json(routines);
}