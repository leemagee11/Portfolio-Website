"use client";

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import projectsData from './projectsData';
import Navbar from '@/components/Navbar';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const toggleCard = (cardId: string) => {
  setExpandedCards((prev) => ({
    ...prev,
    [cardId]: !prev[cardId],
  }));
};

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">Explore some of the work I have done.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                isExpanded={!!expandedCards[project.id]}
                toggleCard={() => toggleCard(project.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}