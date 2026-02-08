export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-400">
        The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-green-600 text-black rounded hover:bg-green-500 transition-colors"
      >
        Go Home
      </a>
    </div>
  );
}
