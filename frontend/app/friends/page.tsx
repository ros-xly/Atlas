import Link from "next/link";
import FloatCard from "@/components/FloatCard";

export default function Friends() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        👯 Friends
      </h1>

      <Link href="/friends/invite">
        <FloatCard>
          💖 Invite Friends
        </FloatCard>
      </Link>

      <FloatCard>
        Friend features coming soon 🌸
      </FloatCard>
    </main>
  );
}