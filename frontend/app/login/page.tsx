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

      alert("Login Successful");
    } else {
      alert("Login Failed");
    }
  }

  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Login
      </h1>

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        className="border p-2 rounded w-full mb-2"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
        className="border px-4 py-2 rounded"
        onClick={login}
      >
        Login
      </button>
    </main>
  );
}