import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[screen-5rem] w-screen flex flex-col bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      {/* <header className="bg-black bg-opacity-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-white">
            TaskManager
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-400">Home
            </Link>
            <Link href="/dashboard" className="hover:text-gray-400">Dashboard
            </Link>
            <Link href="/about" className="hover:text-gray-400">About
            </Link>
            <Link href="/contact" className="hover:text-gray-400">Contact
            </Link>
          </nav>
        </div>
      </header> */}

      <main className="flex-grow flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-100">
          Welcome to TaskManager
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-12">
          Your ultimate project management tool.
        </p>
        <Link
          href="/dashboard"
          className="inline-block bg-gray-800 text-gray-200 px-8 py-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
        >
          Go to Dashboard
        </Link>
      </main>

      <section className="bg-gray-800 bg-opacity-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                Task Assignment
              </h3>
              <p className="text-gray-300">
                Assign tasks to team members efficiently.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                Progress Tracking
              </h3>
              <p className="text-gray-300">
                Track the progress of your projects in real-time.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                Collaborative Tools
              </h3>
              <p className="text-gray-300">
                Communicate and collaborate with your team seamlessly.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                Time Management
              </h3>
              <p className="text-gray-300">
                Keep track of deadlines and manage your time effectively.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                Reporting
              </h3>
              <p className="text-gray-300">
                Generate detailed reports on project progress.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                Integrations
              </h3>
              <p className="text-gray-300">
                Integrate with other tools you already use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
