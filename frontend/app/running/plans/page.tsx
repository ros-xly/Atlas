import { runningPlans } from "@/lib/runningPlans";

export default function RunningPlans() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Running Plans
      </h1>

      {runningPlans.map((plan) => (
        <div
          key={plan.id}
          className="border rounded-lg p-4 mb-3"
        >
          <h2 className="font-semibold">
            {plan.name}
          </h2>

          <p>
            Type: {plan.type}
          </p>

          <p>
            Distance: {plan.distance}km
          </p>
        </div>
      ))}
    </main>
  );
}