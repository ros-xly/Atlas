export default function Register() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Register
      </h1>

      <input
        className="border p-2 mb-2 block"
        placeholder="Name"
      />

      <input
        className="border p-2 mb-2 block"
        placeholder="Email"
      />

      <button className="border p-2">
        Create Account
      </button>
    </main>
  );
}