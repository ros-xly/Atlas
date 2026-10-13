import { conditioningTemplates } from "@/lib/conditioningTemplates";

export default function Templates() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Conditioning Templates
      </h1>

      {conditioningTemplates.map((template) => (
        <div
          key={template.name}
          className="border rounded-lg p-4 mb-3"
        >
          {template.name}
        </div>
      ))}
    </main>
  );
}