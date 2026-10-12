import { exercises } from "@/lib/exercises";

export default function WorkoutDetails() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Upper Body Strength
      </h1>

      {exercises.map((exercise) => (
        <div
          key={exercise.id}
          className="border rounded-lg p-4 mb-2"
        >
          <h2>{exercise.name}</h2>

          <p>
            {exercise.sets} x {exercise.reps}
          </p>
        </div>
      ))}
    </main>
  );
}