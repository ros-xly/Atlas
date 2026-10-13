import Link from "next/link";
import FloatCard from "@/components/FloatCard";

export default function GoalCategories() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        🎯 Goals
      </h1>

      <div className="space-y-4">
        <Link href="/goals">
          <FloatCard>
            🎯 All Goals
          </FloatCard>
        </Link>

        <FloatCard>
          💪 Gym Goals
        </FloatCard>

        <FloatCard>
          🏃 Running Goals
        </FloatCard>

        <FloatCard>
          🎪 Aerial Goals
        </FloatCard>

        <FloatCard>
          📅 Event Goals
        </FloatCard>
      </div>
    </main>
  );
}