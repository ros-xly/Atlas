export default function CreateRun() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Log Run
      </h1>

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Distance (km)"
      />

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Time"
      />

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Feeling"
      />

      <textarea
        className="border p-2 rounded w-full mb-2"
        placeholder="Notes"
      />

      <button className="border px-4 py-2 rounded">
        Save Run
      </button>
    </main>
  );
}
