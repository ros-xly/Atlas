export default function InviteFriend() {
  const inviteLink =
    window !== undefined
      ? window.location.origin
      : "";

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        👯 Invite Friends
      </h1>

      <p className="mb-4">
        Invite friends to join Float.
      </p>

      <a
        className="float-button"
        href={`https://wa.me/?text=Join Float ✨ ${inviteLink}`}
      >
        Share On WhatsApp 💖
      </a>
    </main>
  );
}