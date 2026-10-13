import FloatCard from "@/components/FloatCard";
import { exercises } from "@/lib/exercises";

export default function CommunityExercises() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        🌍 Community Exercises
      </h1>

      {exercises.length === 0 && (
        <FloatCard>
          🌸 No exercises yet
        </FloatCard>
      )}

      {exercises.map((exercise: any) => (
        <FloatCard key={exercise.id}>
          <h2 className="font-bold">
            {exercise.name}
          </h2>

          <p>
            {exercise.category}
          </p>

          <p className="text-sm mt-2">
            Created by{" "}
            {exercise.createdBy || "Float"}
          </p>
        </FloatCard>
      ))}
    </main>
  );
}