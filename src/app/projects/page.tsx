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
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Chick-fil-A</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                As a QA Analyst for Chick-fil-A, I prioritize quality in app releases to guarantee client satisfaction and deliver great results. I work closely with business partners to understand expected app behavior and expectations, enabling effective communication with developers to resolve defects quickly.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                I mentored a consultant on the Chick-fil-A account, addressing technical and administrative questions, and collaborated with leadership to develop a slide deck highlighting the CFA Now Transformation Story for client pitches.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                My technical skills, including agile methodologies, API testing with tools like Postman and Datadog, and strong communication abilities, have been key to my success. I facilitated weekly bug triage meetings, documented defects in Jira, and contributed ideas to improve the app.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Hartford Steam Boiler</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                As a Business Analyst, I drafted weekly status reports and project plans to track accomplishments, upcoming activities, and issues, ensuring stakeholders were well-informed.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                I led requirements elicitation sessions to understand the source data structure and supported the creation of source-to-target mapping (STM) documentation.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Collaborating with the project team, I gained a deep understanding of the ETL process for extracting data from various sources and contributed to the mainframe retirement initiative with the implementation of IICS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}