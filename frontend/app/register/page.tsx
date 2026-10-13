"use client";

import { useState } from "react";

export default function Register() {
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function register() {
    await fetch(
      "/api/register",
      {
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
      }
    );

    alert(
      "Account Created 🌸"
    );

    window.location.href =
      "/login";
  }

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-5xl font-bold text-pink-500 mb-3">
        Float ✨
      </h1>

      <p className="mb-6 text-gray-600">
        Create your account 💖
      </p>

      <input
        className="float-input"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(
            e.target.value
          )
        }
      />

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
        type="password"
        className="float-input"
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
        onClick={register}
      >
        Create Account ✨
      </button>
    </main>
  );
}