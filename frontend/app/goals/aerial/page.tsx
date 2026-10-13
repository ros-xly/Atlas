"use client";

import { useEffect, useState } from "react";
import FloatCard from "@/components/FloatCard";

export default function GymGoals() {
  const [goals, setGoals] = useState<any[]>([]);

  useEffect(() => {
    loadGoals();
  }, []);

  async function loadGoals() {
    const stored =
      localStorage.getItem("atlasUser");

    if (!stored) return;

    const user = JSON.parse(stored);

    const response = await fetch(
      "/api/goals"
    );

    const allGoals =
      await response.json();

    const filtered = allGoals.filter(
      (goal: any) =>
        goal.ownerEmail ===
          user.email &&
        goal.category === "Aerial"
    );

    setGoals(filtered);
  }

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        🎪 Aerial Goals
      </h1>

      {goals.length === 0 && (
        <FloatCard>
          🌸 No aerial goals yet
        </FloatCard>
      )}

      {goals.map((goal) => (
        <FloatCard key={goal.id}>
          {goal.title}
        </FloatCard>
      ))}
    </main>
  );
}