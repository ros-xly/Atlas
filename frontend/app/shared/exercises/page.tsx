import { sharedExercises } from "@/lib/sharedExercises";

export default function SharedExercises() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Shared Exercises
      </h1>

      {sharedExercises.map((exercise, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 mb-3"
        >
          <p>{exercise.exerciseName}</p>

          <p>
            Shared By: {exercise.sharedBy}
          </p>
        </div>
      ))}
    </main>
  );
}
