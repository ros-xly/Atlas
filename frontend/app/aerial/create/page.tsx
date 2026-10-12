export default function CreateSkill() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Add Skill
      </h1>

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Skill Name"
      />

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Discipline"
      />

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Difficulty"
      />

      <textarea
        className="border p-2 rounded w-full mb-2"
        placeholder="Description"
      />

      <button className="border px-4 py-2 rounded">
        Save Skill
      </button>
    </main>
  );
}