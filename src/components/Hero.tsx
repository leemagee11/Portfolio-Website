'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white py-24 px-4 sm:py-16">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Content for mobile - shown at top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-48 h-48 md:hidden mx-auto rounded-full overflow-hidden shadow-xl mb-8"
          >
            <Image
              src="/images/profile.jpg"
              alt="Lee Magee - Professional Profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 50vw"
              priority
            />
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            >
              Hi, I&apos;m <span className="text-[#2563ab]">Lee Magee</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0"
            >
              A passionate analyst dedicated to uncovering insights that drive smarter decisions and spark meaningful change.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link
                href="/projects"
                className="px-8 py-3 bg-[#2563ab] text-white rounded-lg font-medium hover:bg-[#3373bd] transition-colors w-full sm:w-auto text-center"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-[#2563ab] border border-[#2563ab] rounded-lg font-medium hover:bg-slate-50 transition-colors w-full sm:w-auto text-center"
              >
                Contact Me
              </Link>
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
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
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
            className="w-6 h-6 text-slate-400"
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