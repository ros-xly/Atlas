export default function CreateWorkout() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Create Workout
      </h1>

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Workout Name"
      />

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Rest Minutes"
      />

      <button className="border px-4 py-2 rounded">
        Save Workout
      </button>
    </main>
  );
}
``