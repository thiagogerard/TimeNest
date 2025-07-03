import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-cream px-6 text-center">
      <h1 className="text-4xl font-bold text-emerald-600 mb-4">404</h1>
      <p className="text-gray-700 mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white rounded-full shadow-md hover:opacity-90 transition"
      >
        Back to landing page.
      </Link>
    </main>
  );
}
