"use client";

import { useState } from "react";

export default function CreateGoal() {
  const [title, setTitle] = useState("");
  const [category, setCategory] =
    useState("");

  async function saveGoal() {
    const stored =
      localStorage.getItem(
        "atlasUser"
      );

    if (!stored) {
      alert(
        "Please login first 🌸"
      );
      return;
    }

    const user =
      JSON.parse(stored);

    await fetch("/api/goals", {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        ownerEmail: user.email,
        title,
        category,
      }),
    });

    alert("Goal Created 💖");

    setTitle("");
    setCategory("");
  }

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-2">
        🎯 New Goal
      </h1>

      <p className="mb-6 text-gray-600">
        Add a goal to your Float journey.
      </p>

      <input
        className="float-input"
        placeholder="Goal Title"
        value={title}
        onChange={(e) =>
          setTitle(
            e.target.value
          )
        }
      />

      <select
        className="float-input"
        value={category}
        onChange={(e) =>
          setCategory(
            e.target.value
          )
        }
      >
        <option value="">
          Select Category
        </option>

        <option value="Gym">
          💪 Gym
        </option>

        <option value="Running">
          🏃 Running
        </option>

        <option value="Aerial">
          🎪 Aerial
        </option>

        <option value="Events">
          📅 Events
        </option>

        <option value="Personal">
          🌸 Personal
        </option>
      </select>

      <button
        className="float-button"
        onClick={saveGoal}
      >
        Save Goal 💖
      </button>
    </main>
  );
}