import { friends } from "@/lib/friends";

export default function FriendsPage() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Friends
      </h1>

      {friends.map((friend) => (
        <div
          key={friend.id}
          className="border rounded-lg p-4 mb-3"
        >
          <h2 className="font-semibold">
            {friend.name}
          </h2>

          <p>
            Status: {friend.status}
          </p>
        </div>
      ))}
    </main>
  );
}