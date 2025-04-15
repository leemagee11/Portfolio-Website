"use client";

import { motion } from 'framer-motion';

interface ProjectCardProps {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tech: string[];
  role: string;
  challenges: string[];
  liveUrl: string;
  githubUrl: string;
  isExpanded: boolean; // Added prop for expansion state
  toggleCard: () => void; // Added prop for toggle function
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  shortDescription,
  fullDescription,
  tech,
  role,
  challenges,
  liveUrl,
  githubUrl,
  isExpanded,
  toggleCard,
}) => {
  const backgroundColor = id === '1' ? 'bg-[#DD0031]' : id === '2' ? 'bg-[#175788]' : 'bg-gradient-to-r from-blue-500 to-purple-600';

  const animationVariants = {
    collapsed: { opacity: 0, height: 0 },
    expanded: { opacity: 1, height: 'auto' },
  };

  return (
    <motion.div
      layout
      className={`rounded-lg shadow-lg overflow-hidden text-white ${backgroundColor}`}
      aria-expanded={isExpanded}
    >
      <div
        className="cursor-pointer p-6"
        onClick={toggleCard}
      >
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2">{shortDescription}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((tag) => (
            <span
              key={tag}
              className="bg-white text-gray-800 text-sm px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          className="mt-4 underline"
          onClick={(e) => {
            e.stopPropagation();
            toggleCard();
          }}
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      </div>

      <motion.div
        variants={animationVariants}
        initial="collapsed"
        animate={isExpanded ? 'expanded' : 'collapsed'}
        className="p-6 border-t border-white"
      >
        <p className="mb-4">{fullDescription}</p>
        <p className="mb-4">
          <strong>Role:</strong> {role}
        </p>
        <div className="mb-4">
          <strong>Challenges:</strong>
          <ul className="list-disc list-inside">
            {challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Live Project
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub Repo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;