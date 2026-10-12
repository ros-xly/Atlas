export default function CreateGoal() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Create Goal
      </h1>

      <input
        className="border p-2 block mb-2"
        placeholder="Goal Title"
      />

      <input
        className="border p-2 block mb-2"
        placeholder="Category"
      />

      <button className="border px-4 py-2 rounded">
        Save Goal
      </button>
    </main>
  );
}
