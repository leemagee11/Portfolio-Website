"use client";

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
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I’m a dedicated QA Analyst and Business Analyst with a passion for delivering high-quality software solutions. At Chick-fil-A, I’ve taken a lead role in ensuring smooth mobile app releases, mentoring teammates, and driving improvements through bug triage meetings and API testing with tools like Postman and Datadog. I also bring experience in business analysis from my time at Hartford Steam Boiler, where I supported data migration projects and helped modernize legacy systems through ETL and STM documentation.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              My approach combines strong technical know-how with collaborative problem-solving. Whether resolving defects under pressure or documenting complex workflows, I focus on efficiency, clarity, and communication.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}