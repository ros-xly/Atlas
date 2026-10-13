import { friendGoals } from "@/lib/friendGoals";

export default function FriendGoals() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Friend Goals
      </h1>

      {friendGoals.map((goal, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 mb-3"
        >
          <p>{goal.friend}</p>
          <p>{goal.goal}</p>
        </div>
      ))}
    </main>
  );
}