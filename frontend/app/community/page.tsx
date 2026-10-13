import Link from "next/link";
import FloatCard from "@/components/FloatCard";

export default function Community() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        🌍 Community
      </h1>

      <div className="space-y-4">
        <Link href="/community/exercises">
          <FloatCard>
            💪 Exercises
          </FloatCard>
        </Link>

        <Link href="/community/skills">
          <FloatCard>
            🎪 Skills
          </FloatCard>
        </Link>

        <FloatCard>
          📋 Workouts
          <p className="text-sm">
            Coming Soon
          </p>
        </FloatCard>

        <FloatCard>
          ✨ Conditioning
          <p className="text-sm">
            Coming Soon
          </p>
        </FloatCard>
      </div>
    </main>
  );
}