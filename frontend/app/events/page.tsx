import { events } from "@/lib/events";

export default function Events() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Events
      </h1>

      {events.map((event) => (
        <div
          key={event.id}
          className="border rounded-lg p-4 mb-3"
        >
          <h2 className="font-semibold">
            {event.name}
          </h2>

          <p>
            Type: {event.type}
          </p>

          <p>
            Date: {event.date}
          </p>
        </div>
      ))}
    </main>
  );
}