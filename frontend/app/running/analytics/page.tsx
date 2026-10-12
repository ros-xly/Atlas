import { runAnalytics } from "@/lib/runAnalytics";

export default function RunningAnalytics() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Running Analytics
      </h1>

      <div className="border rounded-lg p-4 mb-3">
        <p>Total Runs: {runAnalytics.totalRuns}</p>
        <p>Total Distance: {runAnalytics.totalDistance}km</p>
        <p>Average Distance: {runAnalytics.averageDistance}km</p>
      </div>

    <div className="border rounded-lg p-4 mb-3">
        <h2 className="font-semibold mb-2">
        Distance Trend
        </h2>

        <p>Week 1: 5km</p>
        <p>Week 2: 8km</p>
    </div>

    <div className="border rounded-lg p-4 mb-3">
        <h2 className="font-semibold mb-2">
         Pace Trend
        </h2>

        <p>Week 1: 6:50</p>
        <p>Week 2: 6:20</p>
    </div>

    <div className="border rounded-lg p-4 mb-3">
        <h2 className="font-semibold mb-2">
            Feeling Trend
        </h2>

        <p>Week 1: Good</p>
        <p>Week 2: Great</p>
    </div>

    </main>
  );
}