import { workoutLogs } from "@/lib/workoutLogs";

export default function WorkoutLogPage() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Workout Log
      </h1>

      {workoutLogs.map((log) => (
        <div
          key={log.id}
          className="border rounded-lg p-4 mb-3"
        >
          <h2 className="font-semibold">
            {log.exerciseName}
          </h2>

          <p>
            Sets: {log.sets}
          </p>

          <p>
            Reps: {log.reps}
          </p>

          <p>
            Weight: {log.weight}kg
          </p>

          <p>
             {log.completed ? "✅ Complete" : "⬜ In Progress"}
            </p>
        </div>
      ))}
    </main>
  );
}