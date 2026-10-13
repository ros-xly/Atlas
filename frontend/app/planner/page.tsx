import Link from "next/link";
import FloatCard from "@/components/FloatCard";

export default function PlannerHub() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-2">
        📅 Planner
      </h1>

      <p className="mb-6 text-gray-600">
        Organise your week and stay on track.
      </p>

      <div className="space-y-4">
        <Link href="/planner/week">
          <FloatCard>
            🌸 My Week
          </FloatCard>
        </Link>

        <Link href="/planner/day">
          <FloatCard>
            ☀️ Day View
          </FloatCard>
        </Link>

        <Link href="/planner/plan">
          <FloatCard>
            ✨ Weekly Planning
          </FloatCard>
        </Link>

        <Link href="/planner/review">
          <FloatCard>
            💖 Weekly Review
          </FloatCard>
        </Link>
      </div>
    </main>
  );
}