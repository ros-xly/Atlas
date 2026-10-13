import Link from "next/link";
import FloatCard from "@/components/FloatCard";

export default function RunningHub() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-2">
        🏃 Running Hub
      </h1>

      <p className="mb-6 text-gray-600">
        Track your running journey.
      </p>

      <div className="space-y-4">
        <Link href="/running">
          <FloatCard>
            🏃 Run Tracking
          </FloatCard>
        </Link>

        <Link href="/goals/categories">
          <FloatCard>
            🎯 Running Goals
          </FloatCard>
        </Link>
      </div>
    </main>
  );
}