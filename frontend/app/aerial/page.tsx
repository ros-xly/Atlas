import Link from "next/link";
import { skills } from "@/lib/skills";
import FloatCard from "@/components/FloatCard";

export default function Aerial() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-2">
        🎪 Aerial
      </h1>

      <p className="mb-6 text-gray-600">
        Build strength. Learn skills. Shine.
      </p>

      <FloatCard>
        <h2 className="font-bold text-lg">
          ✨ My Aerial Journey
        </h2>

        <p>
          Track skills, routines and
          conditioning all in one place.
        </p>
      </FloatCard>

      <Link href="/aerial/create">
        <button className="float-button mb-6 mt-4">
          Add Skill 💖
        </button>
      </Link>

      <div className="space-y-4">
        {skills.map((skill) => (
          <FloatCard key={skill.id}>
            <h2 className="text-lg font-bold">
              {skill.name}
            </h2>

            <p>
              🎪 {skill.discipline}
            </p>

            <p>
              ⭐ {skill.difficulty}
            </p>

            <p className="mt-2">
              {skill.description}
            </p>
          </FloatCard>
        ))}
      </div>
    </main>
  );
}