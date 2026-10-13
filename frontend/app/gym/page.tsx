import Link from "next/link";
import { exercises } from "@/lib/exercises";
import FloatCard from "@/components/FloatCard";

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

      <div className="space-y-4">
        {exercises.map((exercise) => (
          <FloatCard key={exercise.id}>
            <h2 className="text-lg font-bold">
              {exercise.name}
            </h2>

            <p>
              {exercise.category}
            </p>

            <p className="mt-2">
              {exercise.sets} × {exercise.reps}
            </p>
          </FloatCard>
        ))}
      </div>
    </main>
  );
}