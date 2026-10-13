export default function CreateRun() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        Log Run 🏃✨
      </h1>

      <input
        className="float-input"
        placeholder="Distance (km)"
      />

      <input
        className="float-input"
        placeholder="Time"
      />

      <input
        className="float-input"
        placeholder="Feeling"
      />

      <textarea
        className="float-input"
        placeholder="How did it feel?"
      />

      <button className="float-button">
        Save Run 💖
      </button>
    </main>
  );
}