import {
  getGoals,
  saveGoals,
} from "@/lib/goalStorage";

export async function GET() {
  return Response.json(getGoals());
}

export async function POST(
  request: Request
) {
  const data = await request.json();

  const goals = getGoals();

  const newGoal = {
    id: Date.now(),
    title: data.title,
    category: data.category,
    completed: false,
    progress: 0,
  };

  goals.push(newGoal);

  saveGoals(goals);

  return Response.json(newGoal);
}
