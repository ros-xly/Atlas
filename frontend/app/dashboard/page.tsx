export default function Dashboard() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="border rounded-lg p-4 mb-4 shadow-sm">
        <h2 className="font-semibold">
          Current Goals
        </h2>
        <p>No goals yet</p>
      </div>

      <div className="border rounded-lg p-4 mb-4 shadow-sm">
        <h2 className="font-semibold">
          Today's Activities
        </h2>
        <p>No activities planned</p>
      </div>

      <div className="border rounded-lg p-4 shadow-sm">
        <h2 className="font-semibold">
          Weekly Progress
        </h2>
        <p>0%</p>
      </div>
    </main>
  );
}