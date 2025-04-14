import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">Learn more about my journey and experiences.</p>
          </div>
          <div className="space-y-6">
            <p className="text-slate-600 dark:text-slate-300">
              I am a passionate analyst with a strong background in uncovering insights that drive smarter decisions and spark meaningful change. With years of experience in data analysis and visualization, I have honed my skills in delivering actionable insights to stakeholders.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              My journey has been fueled by curiosity and a commitment to continuous learning. I thrive in collaborative environments where I can contribute to impactful projects and grow alongside talented professionals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}