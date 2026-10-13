import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-slate-100 border-b p-4">
      <h1 className="text-xl font-bold text-blue-600 mb-2">
        Atlas
      </h1>

      <div className="flex flex-wrap gap-3 text-sm">
        <Link href="/">Home</Link>

        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/goals">
          Goals
        </Link>

        <Link href="/gym">
          Gym
        </Link>

        <Link href="/running">
          Running
        </Link>

        <Link href="/aerial">
          Aerial
        </Link>

        <Link href="/planner">
          Planner
        </Link>

        <Link href="/events">
          Events
        </Link>

        <Link href="/friends">
          Friends
        </Link>

        <Link href="/profile">
          Profile
        </Link>
      </div>
    </nav>
  );
}