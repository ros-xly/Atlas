export default function CreateExercise() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        New Exercise ✨
      </h1>

      <input
        className="float-input"
        placeholder="Exercise Name"
      />

      <input
        className="float-input"
        placeholder="Category"
      />

      <button className="float-button">
        Save Exercise 💖
      </button>
    </main>
  );
}