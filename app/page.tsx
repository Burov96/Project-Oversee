import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-500 bg-opacity-20 text-white">
      <div className="text-center p-6 md:p-12">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-gray-100">Welcome to TaskMaster</h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8">
          Your ultimate project management tool.
        </p>
        <Link href="/dashboard">
          <p className="inline-block bg-gray-800 text-gray-200 px-8 py-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            Go to Dashboard
          </p>
        </Link>
      </div>
      <div className="mt-12 text-center text-gray-400">
        <p className="text-sm">&copy; 2024 TaskMaster. All rights reserved.</p>
      </div>
    </div>
  );
}
