"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import FloatCard from "@/components/FloatCard";
import VisibilityBadge from "@/components/VisibilityBadge";

export default function Goals() {
  const [goals, setGoals] =
    useState<any[]>([]);

  useEffect(() => {
    loadGoals();
  }, []);

  async function loadGoals() {
    const stored =
      localStorage.getItem(
        "atlasUser"
      );

    if (!stored) return;

    const user =
      JSON.parse(stored);

    const response =
      await fetch(
        "/api/goals"
      );

    const allGoals =
      await response.json();

    const userGoals =
      allGoals.filter(
        (goal: any) =>
          goal.ownerEmail ===
          user.email
      );

    setGoals(userGoals);
  }

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-4">
        🎯 Goals
      </h1>

      <Link href="/goals/create">
        <button className="float-button mb-6">
          Add Goal 💖
        </button>
      </Link>

      {goals.length === 0 && (
        <FloatCard>
          <h2 className="font-bold">
            🌸 No goals yet
          </h2>

          <p>
            Create your first goal.
          </p>
        </FloatCard>
      )}

      {goals.map((goal) => (
        <FloatCard key={goal.id}>
          <h2 className="font-bold text-lg">
            {goal.title}
          </h2>

          <p>
            {goal.category}
          </p>

          <VisibilityBadge
            visibility={
              goal.visibility
            }
          />
        </FloatCard>
      ))}
    </main>
  );
}