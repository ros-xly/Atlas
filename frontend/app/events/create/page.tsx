export default function CreateEvent() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Create Event
      </h1>

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Event Name"
      />

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Type"
      />

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Date"
      />

      <button className="border px-4 py-2 rounded">
        Save Event
      </button>
    </main>
  );
}