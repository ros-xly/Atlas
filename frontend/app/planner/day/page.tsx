import FloatCard from "@/components/FloatCard";

export default function DayView() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        ☀️ Today
      </h1>

      <FloatCard>
        <h2 className="font-bold">
          Monday
        </h2>

        <p>
          Upper Body Workout
        </p>
      </FloatCard>
    </main>
  );
}