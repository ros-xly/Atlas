import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-5xl font-bold text-blue-600">
        Atlas
      </h1>

      <p className="mt-2 mb-6">
        Plan. Train. Progress.
      </p>

      <div className="grid gap-3">
        <Link
          href="/dashboard"
          className="border rounded-lg p-4 block"
        >
          Dashboard
        </Link>

        <Link
          href="/goals"
          className="border rounded-lg p-4 block"
        >
          Goals
        </Link>

        <Link
          href="/gym"
          className="border rounded-lg p-4 block"
        >
          Gym
        </Link>

        <Link
          href="/running"
          className="border rounded-lg p-4 block"
        >
          Running
        </Link>

        <Link
          href="/aerial"
          className="border rounded-lg p-4 block"
        >
          Aerial
        </Link>

        <Link
          href="/planner"
          className="border rounded-lg p-4 block"
        >
          Planner
        </Link>

        <Link
          href="/events"
          className="border rounded-lg p-4 block"
        >
          Events
        </Link>

        <Link
          href="/friends"
          className="border rounded-lg p-4 block"
        >
          Friends
        </Link>

        <Link
          href="/profile"
          className="border rounded-lg p-4 block"
        >
          Profile
        </Link>
      </div>
    </main>
  );
}