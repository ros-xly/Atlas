import Link from "next/link";
import FloatCard from "@/components/FloatCard";
import { exercises } from "@/lib/exercises";

export default function Gym() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-2">
        💪 Gym
      </h1>

      <p className="mb-6 text-gray-600">
        Build strength. Track progress.
      </p>

      <Link href="/gym/create">
        <button className="float-button mb-6">
          Add Exercise 💖
        </button>
      </Link>

      {exercises.length === 0 && (
        <FloatCard>
          <h2 className="font-bold">
            🌸 No exercises yet
          </h2>

          <p>
            Create the first community
            exercise.
          </p>
        </FloatCard>
      )}

      <div className="space-y-4">
        {exercises.map(
          (exercise: any) => (
            <FloatCard
              key={exercise.id}
            >
              <h2 className="font-bold text-lg">
                {exercise.name}
              </h2>

              <p>
                {exercise.category}
              </p>

              <p className="mt-2">
                {exercise.sets} ×{" "}
                {exercise.reps}
              </p>

              {exercise.createdBy && (
                <p className="text-sm text-gray-500 mt-2">
                  Created by{" "}
                  {exercise.createdBy}
                </p>
              )}
            </FloatCard>
          )
        )}
      </div>
    </main>
  );
}