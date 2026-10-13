import Link from "next/link";
import { getGoals } from "@/lib/goalStorage";

export default function Goals() {
  const goals = getGoals();

  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-6">
        Goals
      </h1>

      <Link
        href="/goals/create"
        className="border px-4 py-2 rounded mb-4 inline-block"
      >
        Add Goal
      </Link>

      {goals.map((goal: any) => (
        <div
          key={goal.id}
          className="border rounded-lg p-4 mb-3 mt-3"
        >
          <h2 className="font-semibold">
            {goal.title}
          </h2>

          <p>{goal.category}</p>

          <p className="mt-2">
            {goal.completed
              ? "✅ Complete"
              : "⬜ In Progress"}
          </p>

          <p>
            Progress: {goal.progress}%
          </p>
        </div>
      ))}
    </main>
  );
}