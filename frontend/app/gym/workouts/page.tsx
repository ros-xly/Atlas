import { workouts } from "@/lib/workouts";

export default function Workouts() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Workouts
      </h1>

      {workouts.map((workout) => (
        <div
          key={workout.id}
          className="border rounded-lg p-4 mb-3"
        >
          <h2 className="font-semibold">
            {workout.name}
          </h2>

          <p>
            Rest: {workout.restMinutes} mins
          </p>
        </div>
      ))}
    </main>
  );
}