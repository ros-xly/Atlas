"use client";

import { useState } from "react";

export default function CreateGoal() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  async function saveGoal() {
    await fetch("/api/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        category,
      }),
    });

    alert("Goal Created");
  }

  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Create Goal
      </h1>

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Goal Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Category"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      />

      <button
        className="border px-4 py-2 rounded"
        onClick={saveGoal}
      >
        Save Goal
      </button>
    </main>
  );
}
``