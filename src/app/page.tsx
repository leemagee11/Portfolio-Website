'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { motion } from 'framer-motion';

const skills = [
  'Business Analysis & Requirements Gathering',
  'Stakeholder Engagement',
  'Jira & Confluence',
  'Agile QA & Process Improvement',
  'Data Analysis & Reporting',
  'Documentation & Knowledge Management',
];

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lee-magee/',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/leemagee11',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4 scroll-mt-20" aria-labelledby="about-heading">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2563ab] dark:text-[#60a5fa] mb-2">About</p>
            <h2 id="about-heading" className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300">Get to know more about my journey and expertise</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">My Story</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I&apos;m a Quality, Product, and Business Analyst who thrives in agile product development, requirements gathering, and process improvement. My strength lies in transforming requirement gaps into actionable user stories that drive meaningful enhancements for both iOS and Android apps. This extends to validating API integrity, making sure upstream data supports a seamless user experience.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Over the past few years, I&apos;ve had the opportunity to collaborate closely with product teams to elevate quality, improve user experience, and deliver greater value to users. I enjoy digging into details, uncovering opportunities for improvement, and turning them into solutions that make an impact.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I&apos;m eager to continue delivering innovative products that create real value and elevate the user experience. If you&apos;d like to discuss product strategies or explore ways to make an impact for users, feel free to reach out!
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Skills & Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {skills.map((skill) => (
                  <div key={skill} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center">
                    <span className="text-gray-900 dark:text-white text-sm">{skill}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Professional Experience</h3>
              <div className="space-y-10 mb-8">
                <div className="border-l-4 border-primary pl-5">
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Nov 2022 – Present</p>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Senior Consultant</h4>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">Sogeti · Atlanta, GA · Client: Chick-fil-A</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Consultant (Jan 2024 – Jan 2025) · Associate Consultant (Jul 2022 – Jan 2024)</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mt-3 ml-0">
                    <li>Translated requirement gaps into actionable user stories for iOS and Android apps for the CFA Now team, supporting product enhancements and smoother releases.</li>
                    <li>Documented and validated app behavior for permalink, vanity link, and audience permissions in Airship, ensuring accurate access and consistent handling across platforms.</li>
                    <li>Tested audience-based access behavior for Chick-fil-A News articles in partnership with Corporate Communications and the Content Team.</li>
                    <li>Partnered with product owners and developers to prioritize defects and ensure readiness for feature releases.</li>
                    <li>Facilitated weekly triage meetings, providing leadership with actionable insights that helped the team prioritize and resolve defects more efficiently.</li>
                    <li>Rebuilt the regression test suite to ensure accurate test coverage across core features; led initiatives to elevate product quality.</li>
                    <li>Served as a QA leader for the CFA Now mobile app, identifying and resolving 253 of 295 total bugs (86%) across the QA Team over the past year.</li>
                  </ul>
                </div>
                <div className="border-l-4 border-primary pl-5">
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Aug 2021 – Dec 2021</p>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">IT Enterprise Business Analyst Co-Op</h4>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">Shaw Industries · Dalton, GA</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mt-3 ml-0">
                    <li>Built and scheduled a Python script to validate data transfers across multiple sources into EBX, ensuring accurate and reliable business reporting.</li>
                    <li>Queried and formatted large datasets in SQL, enabling accurate reporting and analysis for stakeholders.</li>
                    <li>Collaborated with the IT Help Team to manage user permissions and support efficient request processing.</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Certifications</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 mb-8">
                <li>· AWS Certified Cloud Practitioner – Amazon Web Services</li>
                <li>· Certified Tester, Foundation Level – Agile Tester (CTFL-AT) – ASTQB</li>
                <li>· Certified Tester, Foundation Level (CTFL) – ASTQB</li>
                <li>· Certified ScrumMaster (CSM) – Scrum Alliance</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Education</h3>
              <p className="text-gray-900 dark:text-white font-medium">Georgia College & State University · Milledgeville, GA</p>
              <p className="text-gray-600 dark:text-gray-300">Bachelor of Business Administration – Management Information Systems · July 2022</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">J. Whitney Bunting College of Business</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">Additional experience: University Housing Assistant, Georgia College; Team Member, Chick-fil-A; Camp Counselor, WinShape Camps (2019–2021)</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-b from-white to-slate-50 dark:from-gray-800 dark:to-gray-900 py-16 px-4 scroll-mt-20" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2563ab] dark:text-[#60a5fa] mb-2">Contact</p>
            <h2 id="contact-heading" className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">Have a question or want to work together?</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-[#2563ab] dark:focus:ring-[#60a5fa] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-[#2563ab] dark:focus:ring-[#60a5fa] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-[#2563ab] dark:focus:ring-[#60a5fa] focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-3 bg-[#2563ab] dark:bg-[#60a5fa] text-white rounded-lg font-medium hover:bg-[#3373bd] dark:hover:bg-[#3b82f6] transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && <p className="text-green-600 dark:text-green-400 text-center mt-4">Message sent successfully!</p>}
                {submitStatus === 'error' && <p className="text-red-600 dark:text-red-400 text-center mt-4">Failed to send message. Please try again.</p>}
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-slate-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume (PDF)
                </a>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-300 hover:text-[#2563ab] dark:hover:text-[#60a5fa] transition-colors"
                    >
                      {link.icon}
                      <span className="sr-only">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Location</h3>
                <p className="text-slate-600 dark:text-slate-300">Atlanta, GA</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Email</h3>
                <a href="mailto:slmagee24@gmail.com" className="text-[#2563ab] dark:text-[#60a5fa] hover:underline">slmagee24@gmail.com</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
