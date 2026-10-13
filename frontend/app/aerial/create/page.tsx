export default function CreateSkill() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        New Skill ✨
      </h1>

      <input
        className="float-input"
        placeholder="Skill Name"
      />

      <input
        className="float-input"
        placeholder="Discipline"
      />

      <input
        className="float-input"
        placeholder="Difficulty"
      />

      <textarea
        className="float-input"
        placeholder="Description"
      />

      <button className="float-button">
        Save Skill 💖
      </button>
    </main>
  );
}