"use client";

export default function Logout() {
  function logout() {
    localStorage.removeItem(
      "FloatUser"
    );

    alert("Logged Out");
  }

  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        Logout
      </h1>

      <button
        className="border px-4 py-2 rounded"
        onClick={logout}
      >
        Logout
      </button>
    </main>
  );
}