import Navbar from '@/components/Navbar';

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">Explore some of the work I have done.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Project 1</h2>
              <p className="text-slate-600 dark:text-slate-300">A brief description of the project and its impact.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Project 2</h2>
              <p className="text-slate-600 dark:text-slate-300">A brief description of the project and its impact.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}