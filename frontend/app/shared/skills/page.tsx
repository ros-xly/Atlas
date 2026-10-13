import { sharedSkills } from "@/lib/sharedSkills";

export default function SharedSkills() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Shared Skills
      </h1>

      {sharedSkills.map((skill, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 mb-3"
        >
          <p>{skill.skillName}</p>

          <p>
            Shared By: {skill.sharedBy}
          </p>
        </div>
      ))}
    </main>
  );
}