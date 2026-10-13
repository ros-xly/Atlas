import { routines } from "@/lib/routines";
import FloatCard from "@/components/FloatCard";

export default function Routines() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        🌸 Routines
      </h1>

      <div className="space-y-4">
        {routines.map((routine) => (
          <FloatCard key={routine.id}>
            <h2 className="font-bold">
              {routine.name}
            </h2>

            <p>
              {routine.notes}
            </p>
          </FloatCard>
        ))}
      </div>
    </main>
  );
}
``