export default function CreateExercise() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Add Exercise
      </h1>

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Exercise Name"
      />

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Category"
      />

      <button className="border px-4 py-2 rounded">
        Save Exercise
      </button>
    </main>
  );
}