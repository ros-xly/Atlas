import Link from "next/link";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3">
      <div className="flex justify-around text-2xl">
        <Link href="/">
          🏠
        </Link>

        <Link href="/goals/categories">
          🎯
        </Link>

        <Link href="/gym/hub">
          💪
        </Link>

        <Link href="/running/hub">
          🏃
        </Link>

        <Link href="/aerial/hub">
          ✨
        </Link>

        <Link href="/profile">
          👤
        </Link>
      </div>
    </div>
  );
}