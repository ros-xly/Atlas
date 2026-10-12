import { runs } from "@/lib/runs";

export async function GET() {
  return Response.json(runs);
}