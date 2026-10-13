import { calendarItems } from "@/lib/calendar";

export default function WeekView() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Week View
      </h1>

      {calendarItems.map((item) => (
        <div
          key={item.day}
          className="border rounded-lg p-3 mb-2"
        >
          <strong>{item.day}</strong>

          <br />

          {item.activity}
        </div>
      ))}
    </main>
  );
}