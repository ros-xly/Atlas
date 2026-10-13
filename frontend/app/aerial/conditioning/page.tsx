import { conditioningExercises } from "@/lib/conditioningExercises";

export default function Conditioning() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Conditioning Exercises
      </h1>

      {conditioningExercises.map((exercise) => (
        <div
          key={exercise.id}
          className="border rounded-lg p-4 mb-3"
        >
          <h2>{exercise.name}</h2>

          <p>
            Focus: {exercise.focus}
          </p>

          <p>
            Reps: {exercise.reps}
          </p>
        </div>
      ))}
    </main>
  );
}