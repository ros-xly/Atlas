"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function login() {
    const response = await fetch(
      "/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const result =
      await response.json();

    if (result.success) {
      localStorage.setItem(
        "atlasUser",
        JSON.stringify(result.user)
      );

      window.location.href = "/";
    } else {
      alert(
        "Login failed 💖"
      );
    }
  }

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-5xl font-bold text-pink-500 mb-3">
        Float ✨
      </h1>

      <p className="mb-6 text-gray-600">
        Welcome back 🌸
      </p>

      <input
        className="float-input"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(
            e.target.value
          )
        }
      />

      <input
        className="float-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(
            e.target.value
          )
        }
      />

      <button
        className="float-button"
        onClick={login}
      >
        Sign In 💖
      </button>
    </main>
  );
}