"use client";

import { useState } from "react";

export default function CreateGoal() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  async function saveGoal() {
    await fetch("/api/goals", {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        title,
        category,
      }),
    });

    alert("Goal Created 🌸");
  }

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        New Goal ✨
      </h1>

      <input
        className="float-input"
        placeholder="Goal Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <input
        className="float-input"
        placeholder="Category"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      />

      <button
        className="float-button"
        onClick={saveGoal}
      >
        Save Goal 💖
      </button>
    </main>
  );
}