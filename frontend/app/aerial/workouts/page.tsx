import { conditioningWorkouts } from "@/lib/conditioningWorkouts";

export default function ConditioningWorkouts() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Conditioning Workouts
      </h1>

      {conditioningWorkouts.map((workout) => (
        <div
          key={workout.id}
          className="border rounded-lg p-4 mb-3"
        >
          <h2>{workout.name}</h2>

          <p>
            Exercises: {workout.exerciseCount}
          </p>
        </div>
      ))}
    </main>
  );
}