import { sharedConditioning } from "@/lib/sharedConditioning";

export default function SharedConditioning() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Shared Conditioning Plans
      </h1>

      {sharedConditioning.map((plan, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 mb-3"
        >
          <p>{plan.planName}</p>

          <p>
            Shared By: {plan.sharedBy}
          </p>
        </div>
      ))}
    </main>
  );
}