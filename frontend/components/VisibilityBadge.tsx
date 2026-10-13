export default function VisibilityBadge({
  visibility,
}: {
  visibility: string;
}) {
  if (visibility === "private") {
    return (
      <p className="mt-2 text-sm">
        🔒 Private
      </p>
    );
  }

  if (visibility === "friends") {
    return (
      <p className="mt-2 text-sm">
        👯 Friends
      </p>
    );
  }

  return (
    <p className="mt-2 text-sm">
      🌍 Community
    </p>
  );
}