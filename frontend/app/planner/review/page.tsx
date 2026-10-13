import { weeklyReview } from "@/lib/weeklyReview";
import FloatCard from "@/components/FloatCard";

export default function WeeklyReview() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        💖 Weekly Review
      </h1>

      <FloatCard>
        <p>
          💪 Workouts: {weeklyReview.completedWorkouts}
        </p>

        <p>
          🏃 Runs: {weeklyReview.completedRuns}
        </p>

        <p>
          🎪 Aerial: {weeklyReview.completedAerialSessions}
        </p>
      </FloatCard>
    </main>
  );
}