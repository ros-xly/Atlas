import { friendProgress } from "@/lib/friendProgress";

export default function FriendProgress() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Friend Progress
      </h1>

      {friendProgress.map((friend, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 mb-3"
        >
          <p>{friend.friend}</p>

          <p>
            Progress: {friend.progress}%
          </p>
        </div>
      ))}
    </main>
  );
}