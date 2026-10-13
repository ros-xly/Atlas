import Link from "next/link";
import { getGoals } from "@/lib/goalStorage";
import FloatCard from "@/components/FloatCard";

export default function Goals() {
  const goals = getGoals();

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-4">
        🎯 Goals
      </h1>

      <Link href="/goals/create">
        <button className="float-button mb-4">
          Add Goal
        </button>
      </Link>

      {goals.map((goal: any) => (
        <FloatCard key={goal.id}>
          <h2 className="font-bold text-lg">
            {goal.title}
          </h2>

          <p>{goal.category}</p>

          <p className="mt-2">
            {goal.completed
              ? "✅ Complete"
              : "🌸 In Progress"}
          </p>

          <p>
            Progress: {goal.progress}%
          </p>
        </FloatCard>
      ))}
    </main>
  );
}