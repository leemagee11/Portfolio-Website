'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Content for mobile - shown at top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative md:hidden mx-auto mb-12 pt-8"
          >
            <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden shadow-xl mx-auto">
              <Image
                src="/images/profile.jpg"
                alt="Lee Magee - Professional Profile"
                width={280}
                height={350}
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2"
            >
              Hi, I&apos;m <span className="text-[#2563ab] dark:text-[#60a5fa]">Lee Magee</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 mb-4 max-w-2xl mx-auto md:mx-0"
            >
              Senior Consultant · Quality & Product Analyst
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto md:mx-0"
            >
              Transforming requirement gaps into actionable user stories that drive better products and seamless experiences.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-8"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-[#2563ab] dark:bg-[#60a5fa] text-white rounded-lg font-medium hover:bg-[#3373bd] dark:hover:bg-[#3b82f6] transition-colors w-full sm:w-auto text-center"
              >
                Get in Touch
              </a>
              <a
                href="#about"
                className="px-8 py-3 bg-white dark:bg-gray-800 text-[#2563ab] dark:text-[#60a5fa] border border-[#2563ab] dark:border-[#60a5fa] rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto text-center"
              >
                About Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-slate-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-slate-300 dark:border-gray-600 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-gray-600 transition-colors w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </motion.div>

            {/* Contact strip: email, LinkedIn, location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-1 text-sm text-slate-600 dark:text-slate-400"
            >
              <a href="mailto:slmagee24@gmail.com" className="hover:text-[#2563ab] dark:hover:text-[#60a5fa] transition-colors">
                slmagee24@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/lee-magee/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-[#2563ab] dark:hover:text-[#60a5fa] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <span>Atlanta, GA</span>
            </motion.div>
          </motion.div>

          {/* Image Content for desktop - shown on right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block max-w-md mx-auto w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/profile.jpg"
              alt="Lee Magee - Professional Profile"
              width={400}
              height={533}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-slate-400 dark:text-slate-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 