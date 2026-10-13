import FloatCard from "@/components/FloatCard";

export default function Community() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        🌸 Community
      </h1>

      <FloatCard>
        💪 Exercises
      </FloatCard>

      <FloatCard>
        🎪 Skills
      </FloatCard>

      <FloatCard>
        📋 Workouts
      </FloatCard>

      <FloatCard>
        ✨ Conditioning Plans
      </FloatCard>
    </main>
  );
}