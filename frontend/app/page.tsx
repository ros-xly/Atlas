"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AuthGuard from "@/components/AuthGuard";

export default function Home() {
  const [name, setName] = useState("Friend");

  useEffect(() => {
    const stored =
      localStorage.getItem("atlasUser");

    if (stored) {
      const user = JSON.parse(stored);
      setName(user.name);
    }
  }, []);

  return (
    <AuthGuard>
      <main className="p-6 max-w-md mx-auto">
        <h1 className="text-5xl font-bold text-pink-500 mb-2">
          Float ✨
        </h1>

        <p className="text-xl mb-2">
          Welcome back, {name} 🌸
        </p>

        <p className="text-gray-600 mb-6">
          Ready to make progress today?
        </p>

        <div className="space-y-4">
          <Link href="/goals/categories">
            <div className="float-home-card">
              <h2 className="text-xl font-bold">
                🎯 Goals
              </h2>

              <p>
                Personal goals and progress
              </p>
            </div>
          </Link>

          <Link href="/gym/hub">
            <div className="float-home-card">
              <h2 className="text-xl font-bold">
                💪 Gym
              </h2>

              <p>
                Exercises and strength training
              </p>
            </div>
          </Link>

          <Link href="/running/hub">
            <div className="float-home-card">
              <h2 className="text-xl font-bold">
                🏃 Running
              </h2>

              <p>
                Runs, plans and progress
              </p>
            </div>
          </Link>

          <Link href="/aerial/hub">
            <div className="float-home-card">
              <h2 className="text-xl font-bold">
                🎪 Aerial
              </h2>

              <p>
                Skills, routines and conditioning
              </p>
            </div>
          </Link>

          <Link href="/community">
            <div className="float-home-card">
              <h2 className="text-xl font-bold">
                🌍 Community
              </h2>

              <p>
                Shared exercises and skills
              </p>
            </div>
          </Link>

          <Link href="/planner">
            <div className="float-home-card">
              <h2 className="text-xl font-bold">
                📅 Planner
              </h2>

              <p>
                Organise your week
              </p>
            </div>
          </Link>

          <Link href="/friends">
            <div className="float-home-card">
              <h2 className="text-xl font-bold">
                👯 Friends
              </h2>

              <p>
                Share goals and progress
              </p>
            </div>
          </Link>
        </div>
      </main>
    </AuthGuard>
  );
}