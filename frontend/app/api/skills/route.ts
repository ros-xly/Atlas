import { skills } from "@/lib/skills";

export async function GET() {
  return Response.json(skills);
}