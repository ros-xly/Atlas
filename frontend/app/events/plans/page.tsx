import { eventPlanLinks } from "@/lib/eventPlanLinks";

export default function EventPlans() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Event Plans
      </h1>

      {eventPlanLinks.map((plan, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 mb-3"
        >
          Event {plan.eventId}

          <br />

          {plan.planName}
        </div>
      ))}
    </main>
  );
}