import Link from "next/link";
import FloatCard from "@/components/FloatCard";

export default function GymHub() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-2">
        💪 Gym Hub
      </h1>

      <p className="mb-6 text-gray-600">
        Everything gym in one place.
      </p>

      <div className="space-y-4">
        <Link href="/gym">
          <FloatCard>
            🏋️ Exercise Library
          </FloatCard>
        </Link>

        <Link href="/workouts">
          <FloatCard>
            📋 Workouts
          </FloatCard>
        </Link>

        <Link href="/shared/exercises">
          <FloatCard>
            🌍 Community Exercises
          </FloatCard>
        </Link>

        <Link href="/goals/categories">
          <FloatCard>
            🎯 Gym Goals
          </FloatCard>
        </Link>
      </div>
    </main>
  );
}