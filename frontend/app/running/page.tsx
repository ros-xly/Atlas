import Link from "next/link";
import { runs } from "@/lib/runs";
import FloatCard from "@/components/FloatCard";

export default function Running() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-2">
        🏃 Running
      </h1>

      <p className="mb-6 text-gray-600">
        Every run tells a story.
        <FloatCard>
      <h2 className="font-bold text-lg">
        🌸 Running Journey
      </h2>

  <p>
    Track distance, pace and how
    every run feels.
  </p>
</FloatCard>
      </p>

      <Link href="/running/create">
        <button className="float-button mb-6">
          Log Run ✨
        </button>
      </Link>

      <div className="space-y-4">
        {runs.map((run) => (
          <FloatCard key={run.id}>
            <h2 className="font-bold text-lg">
              {run.distance}km
            </h2>

            <p>
              Time: {run.duration}
            </p>

            <p>
              Feeling: {run.feeling}
            </p>

            <p className="mt-2 text-sm">
              {run.notes}
            </p>
          </FloatCard>
        ))}
      </div>
    </main>
  );
}

{runs.length === 0 && (
  <FloatCard>
    <h2 className="font-bold">
      🏃 No runs yet
    </h2>

    <p>
      Log your first run.
    </p>
  </FloatCard>
)}