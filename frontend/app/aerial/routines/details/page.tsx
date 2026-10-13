import { routineSkills } from "@/lib/routineSkills";

export default function RoutineDetails() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Routine Details
      </h1>

      {routineSkills.map((skill, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 mb-2"
        >
          {skill.skillName}
        </div>
      ))}
    </main>
  );
}