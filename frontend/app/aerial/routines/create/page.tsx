export default function CreateRoutine() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Create Routine
      </h1>

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Routine Name"
      />

      <textarea
        className="border p-2 rounded w-full mb-2"
        placeholder="Routine Notes"
      />

      <button className="border px-4 py-2 rounded">
        Save Routine
      </button>
    </main>
  );
}