import { events } from "@/lib/events";

export async function GET() {
  return Response.json(events);
}
``