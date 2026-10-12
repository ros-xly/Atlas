import { progressionData } from "@/lib/progression";

export default function Progression() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Progression
      </h1>

      {progressionData.map((exercise) => (
        <div
          key={exercise.exerciseName}
          className="border rounded-lg p-4 mb-3"
        >
          <h2 className="font-semibold">
            {exercise.exerciseName}
          </h2>

          <p>
            Current Weight: {exercise.currentWeight}kg
          </p>

          <p>
            +3%: {(exercise.currentWeight * 1.03).toFixed(1)}kg
        </p>

         <p>
             +4%: {(exercise.currentWeight * 1.04).toFixed(1)}kg
        </p>

        <p>
             +5%: {(exercise.currentWeight * 1.05).toFixed(1)}kg
        </p>

        <p className="font-bold text-green-600 mt-2">
             Suggested Weight: {(exercise.currentWeight * 1.04).toFixed(1)}kg
        </p>

        </div>
      ))}
    </main>
  );
}