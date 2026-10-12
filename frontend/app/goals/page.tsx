import { goals } from "@/lib/goals";

export default function Goals() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Goals
      </h1>

      <button className="border px-4 py-2 rounded mb-4">
        Add Goal
      </button>

      {goals.map((goal) => (
        <div
          key={goal.id}
          className="border rounded-lg p-4 mb-3"
        >
          <h2 className="font-semibold">
            {goal.title}
          </h2>

          <p className="text-sm">
          {goal.category}
          </p>

          <p className="text-sm mt-2">
          {goal.completed ? "✅ Complete" : "⬜ In Progress"}
          </p>

          <p className="text-sm">
            Progress: {goal.progress}%
          </p>

        </div>
      ))}
    </main>
  );
}