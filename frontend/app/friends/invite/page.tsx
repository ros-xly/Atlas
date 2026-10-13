export default function InviteFriends() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Invite Friends
      </h1>

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Friend Email"
      />

      <button className="border px-4 py-2 rounded">
        Send Invite
      </button>
    </main>
  );
}