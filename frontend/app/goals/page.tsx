import { goals } from "@/lib/goals";

export default function Goals() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Goals
      </h1>

      {goals.map((goal) => (
        <div
          key={goal.id}
          className="border p-4 rounded mb-2"
        >
          {goal.title}
        </div>
      ))}
    </main>
  );
}