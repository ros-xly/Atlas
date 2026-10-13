import { calendarItems } from "@/lib/calendar";
import FloatCard from "@/components/FloatCard";

export default function WeekView() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        🌸 My Week
      </h1>

      <div className="space-y-4">
        {calendarItems.map((item) => (
          <FloatCard key={item.day}>
            <h2 className="font-bold">
              {item.day}
            </h2>

            <p>
              {item.activity}
            </p>
          </FloatCard>
        ))}
      </div>
    </main>
  );
}