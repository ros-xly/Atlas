import { weeklyRunningPlan } from "@/lib/weeklyRunningPlan";

export default function WeeklyRunningPlan() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Weekly Running Plan
      </h1>

      {weeklyRunningPlan.map((run) => (
        <div
          key={run.day}
          className="border rounded-lg p-4 mb-3"
        >
          <p>{run.day}</p>

          <p>{run.session}</p>
        </div>
      ))}
    </main>
  );
}