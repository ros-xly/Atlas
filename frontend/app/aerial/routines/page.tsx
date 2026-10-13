import { routines } from "@/lib/routines";

export default function Routines() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Routines
      </h1>

      {routines.map((routine) => (
        <div
          key={routine.id}
          className="border rounded-lg p-4 mb-3"
        >
          <h2 className="font-semibold">
            {routine.name}
          </h2>

          <p>{routine.notes}</p>
        </div>
      ))}
    </main>
  );
}