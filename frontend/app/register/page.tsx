"use client";

import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  async function register() {
    await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    alert("Account Created");
  }

  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Register
      </h1>

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

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
        onClick={register}
      >
        Create Account
      </button>
    </main>
  );
}