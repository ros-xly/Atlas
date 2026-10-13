import { weeklyPlan } from "@/lib/weeklyPlan";

export default function PlanningPage() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Weekly Planning
      </h1>

      {weeklyPlan.map((item) => (
        <div
          key={item.day}
          className="border rounded-lg p-4 mb-3"
        >
          <h2 className="font-semibold">
            {item.day}
          </h2>

          <p>{item.activity}</p>

          <p>Type: {item.type}</p>
        </div>
      ))}
    </main>
  );
}