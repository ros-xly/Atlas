import { runs } from "@/lib/runs";

export default function Running() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Run Tracking
      </h1>

      {runs.map((run) => (
        <div
          key={run.id}
          className="border rounded-lg p-4 mb-3"
        >
          <p>
            Distance: {run.distance}km
          </p>

          <p>
            Time: {run.duration}
          </p>

          <p>
            Feeling: {run.feeling}
          </p>

          <p>
            Notes: {run.notes}
          </p>

        </div>
      ))}
    </main>
  );
}