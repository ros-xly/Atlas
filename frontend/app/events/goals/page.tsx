import { goalEventLinks } from "@/lib/goalEventLinks";

export default function EventGoals() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Event Goals
      </h1>

      {goalEventLinks.map((link, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 mb-3"
        >
          Goal {link.goalId}

          <br />

          Linked Event {link.eventId}
        </div>
      ))}
    </main>
  );
}