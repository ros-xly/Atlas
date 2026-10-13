import Link from "next/link";
import FloatCard from "@/components/FloatCard";

export default function AerialHub() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-2">
        🎪 Aerial Hub
      </h1>

      <p className="mb-6 text-gray-600">
        Everything aerial in one place.
      </p>

      <div className="space-y-4">
        <Link href="/aerial">
          <FloatCard>
            ✨ Skills
          </FloatCard>
        </Link>

        <Link href="/aerial/conditioning">
          <FloatCard>
            💪 Conditioning
          </FloatCard>
        </Link>

        <Link href="/aerial/templates">
          <FloatCard>
            📋 Templates
          </FloatCard>
        </Link>

        <Link href="/aerial/routines">
          <FloatCard>
            🌸 Routines
          </FloatCard>
        </Link>

        <Link href="/goals/categories">
          <FloatCard>
            🎯 Aerial Goals
          </FloatCard>
        </Link>
      </div>
    </main>
  );
}