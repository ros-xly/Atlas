import { calendarItems } from "@/lib/calendar";

export async function GET() {
  return Response.json(calendarItems);
}