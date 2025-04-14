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
              As a QA Analyst for Chick-fil-A, I focus on the analysis, design, and testing of solutions that deliver value to our client. I have identified and reported 197 out of 233 bugs (85%) from our QA Team, mentored consultants, and contributed to the CFA Now Transformation Story.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              My previous experience includes working as a Business Analyst at Hartford Steam Boiler, where I strengthened my ability to communicate effectively with stakeholders.
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
        </div>
      </div>
    </>
  );
}