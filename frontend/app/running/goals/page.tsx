import { runningGoals } from "@/lib/runningGoals";

export default function RunningGoals() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Running Goals
      </h1>

      {runningGoals.map((goal) => (
        <div
          key={goal.id}
          className="border rounded-lg p-4 mb-3"
        >
          <h2>{goal.goal}</h2>

          <p>
            Target: {goal.targetDistance}km
          </p>
        </div>
      ))}
    </main>
  );
}