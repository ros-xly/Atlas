import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-5xl font-bold text-pink-500 mb-2">
        Float ✨
      </h1>

      <p className="text-lg mb-6">
        Hi Ros 🌸
      </p>

      <p className="mb-6 text-gray-600">
        Plan. Train. Progress.
      </p>

      <div className="space-y-4">
        <Link href="/goals">
          <div className="float-home-card">
            <h2 className="text-xl font-bold">
              🎯 Goals
            </h2>

            <p>
              Track your personal goals
            </p>
          </div>
        </Link>

        <Link href="/gym">
          <div className="float-home-card">
            <h2 className="text-xl font-bold">
              💪 Gym
            </h2>

            <p>
              Exercises and workouts
            </p>
          </div>
        </Link>

        <Link href="/running">
          <div className="float-home-card">
            <h2 className="text-xl font-bold">
              🏃 Running
            </h2>

            <p>
              Plans, runs and analytics
            </p>
          </div>
        </Link>

        <Link href="/aerial">
          <div className="float-home-card">
            <h2 className="text-xl font-bold">
              🎪 Aerial
            </h2>

            <p>
              Skills, conditioning and routines
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
              Share progress and goals
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}