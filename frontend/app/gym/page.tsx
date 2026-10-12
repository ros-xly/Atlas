import { exercises } from "@/lib/exercises";

export default function Gym() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Exercise Library
      </h1>

      {exercises.map((exercise) => (
        <div
          key={exercise.id}
          className="border rounded-lg p-4 mb-3"
        >
          <h2 className="font-semibold">
            {exercise.name}
          </h2>

          <p>
            Category: {exercise.category}
          </p>

          <p>
            {exercise.sets} x {exercise.reps}
          </p>
        </div>
      ))}
    </main>
  );
}