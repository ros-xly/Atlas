import { runs } from "@/lib/runs";

export default function RunningHistory() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Run History
      </h1>

      {runs.map((run) => (
        <div
          key={run.id}
          className="border rounded-lg p-4 mb-3"
        >
          <p>{run.distance}km</p>
          <p>{run.duration}</p>
          <p>{run.feeling}</p>
        </div>
      ))}
    </main>
  );
}
``