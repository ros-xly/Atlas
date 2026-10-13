"use client";

import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] =
    useState<any>(null);

  useEffect(() => {
    const stored =
      localStorage.getItem(
        "FloatUser"
      );

    if (stored) {
      setUser(
        JSON.parse(stored)
      );
    }
  }, []);

  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Profile
      </h1>

      {user && (
        <div className="border rounded-lg p-4">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </main>
  );
}