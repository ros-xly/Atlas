import Link from "next/link";
import { skills } from "@/lib/skills";

export default function Aerial() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Skill Library
      </h1>

      <Link
        href="/aerial/create"
        className="border px-4 py-2 rounded inline-block mb-4"
      >
        Add Skill
      </Link>

      {skills.map((skill) => (
        <div
          key={skill.id}
          className="border rounded-lg p-4 mb-3"
        >
          <h2>{skill.name}</h2>

          <p>
            Discipline: {skill.discipline}
          </p>

          <p>
            Difficulty: {skill.difficulty}
          </p>

          <p>
            {skill.description}
          </p>
        </div>
      ))}
    </main>
  );
}