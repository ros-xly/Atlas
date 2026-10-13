import { sharedWorkouts } from "@/lib/sharedWorkouts";

export default function SharedWorkouts() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Shared Workouts
      </h1>

      {sharedWorkouts.map((workout, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 mb-3"
        >
          <p>{workout.workoutName}</p>

          <p>
            Shared By: {workout.sharedBy}
          </p>
        </div>
      ))}
    </main>
  );
}