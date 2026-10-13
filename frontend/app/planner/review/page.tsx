import { weeklyReview } from "@/lib/weeklyReview";

export default function WeeklyReview() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Weekly Review
      </h1>

      <div className="border rounded-lg p-4">
        <p>
          Workouts Completed: {weeklyReview.completedWorkouts}
        </p>

        <p>
          Runs Completed: {weeklyReview.completedRuns}
        </p>

        <p>
          Aerial Sessions Completed: {weeklyReview.completedAerialSessions}
        </p>
      </div>
    </main>
  );
}