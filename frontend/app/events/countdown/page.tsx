import { countdowns } from "@/lib/countdowns";

export default function Countdown() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Event Countdown
      </h1>

      {countdowns.map((item) => (
        <div
          key={item.event}
          className="border rounded-lg p-4 mb-3"
        >
          <p>{item.event}</p>

          <p>
            {item.daysRemaining} days remaining
          </p>
        </div>
      ))}
    </main>
  );
}