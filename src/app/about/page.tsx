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
              My previous experience includes working as a Business Analyst at Hartford Steam Boiler, where I strengthened my ability to communicate effectively with stakeholders.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              A passionate, well-rounded Analyst committed to delivering high-quality solutions through meticulous analysis, strategic thinking, and collaborative problem-solving. With experience supporting enterprise applications and data-driven initiatives, I bring a unique blend of technical insight and business acumen to any team. Whether it&apos;s enhancing mobile app quality or leading system transformation, I thrive on turning complex challenges into meaningful results.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Education and Certifications</h2>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-300">
              <li>B.B.A. in Management Information Systems - Georgia College & State University</li>
              <li>Certified Scrum Master (CSM)</li>
              <li>ISTQB Certifications</li>
              <li>AWS Cloud Practitioner Certification</li>
              <li>Consumer Products & Retail Certification</li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Volunteer Experience</h2>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-300">
              <li>Coweta County Leader - Young Life (Dec 2022 - Present)</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
                />
              </svg>
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}