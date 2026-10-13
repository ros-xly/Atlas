import FloatCard from "@/components/FloatCard";
import { skills } from "@/lib/skills";

export default function CommunitySkills() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        🌍 Community Skills
      </h1>

      <div className="space-y-4">
        {skills.map((skill: any) => (
          <FloatCard key={skill.id}>
            <h2 className="font-bold text-lg">
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

            <p className="text-sm mt-2">
              Created by {skill.createdBy || "Float"}
            </p>
          </FloatCard>
        ))}
      </div>
    </main>
  );
}