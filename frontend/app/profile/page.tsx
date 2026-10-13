"use client";

import { useEffect, useState } from "react";
import FloatCard from "@/components/FloatCard";

export default function Profile() {
  const [user, setUser] =
    useState<any>(null);

  useEffect(() => {
    const stored =
      localStorage.getItem(
        "atlasUser"
      );

    if (stored) {
      setUser(
        JSON.parse(stored)
      );
    }
  }, []);

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        👤 Profile
      </h1>

      {user && (
        <FloatCard>
          <h2 className="text-xl font-bold">
            🌸 {user.name}
          </h2>

          <p>
            {user.email}
          </p>

          <p className="mt-4">
            Float Member ✨
          </p>

          <button
            className="float-button mt-4"
            onClick={() => {
              localStorage.removeItem(
                "atlasUser"
              );

              window.location.href =
                "/login";
             }}
          >
            Logout
          </button>

        </FloatCard>
      )}
    </main>
  );
}
