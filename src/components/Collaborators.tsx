import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, UsersRound } from 'lucide-react';
import InteractiveCard from './InteractiveCard';

export type Collaborator = {
  name: string;
  role: string;
  projects: string[];
  github?: string;
  linkedin?: string;
  accent: 'primary' | 'accent' | 'pink' | 'blue' | 'yellow' | 'green';
};

/** Replace names, links, and projects with your real teammates. */
export const collaborators: Collaborator[] = [
  {
    name: 'Teammate Name',
    role: 'Full-Stack Developer',
    projects: ['HerIngress', 'WasteNet'],
    github: '#',
    linkedin: '#',
    accent: 'pink',
  },
  {
    name: 'Teammate Name',
    role: 'Backend Developer',
    projects: ['StaffNet', 'PTMS'],
    github: '#',
    linkedin: '#',
    accent: 'blue',
  },
  {
    name: 'Teammate Name',
    role: 'AI / ML Engineer',
    projects: ['Gwiza AI', 'WasteNet'],
    github: '#',
    linkedin: '#',
    accent: 'yellow',
  },
  {
    name: 'Teammate Name',
    role: 'Frontend Developer',
    projects: ['Nexfly Drones', 'HerIngress'],
    github: '#',
    linkedin: '#',
    accent: 'accent',
  },
];

const accentStyles: Record<Collaborator['accent'], { ring: string; bg: string; text: string }> = {
  primary: { ring: 'ring-primary/30', bg: 'bg-primary/15', text: 'text-primary' },
  accent: { ring: 'ring-accent/30', bg: 'bg-accent/15', text: 'text-accent' },
  pink: { ring: 'ring-pink-400/30', bg: 'bg-pink-400/15', text: 'text-pink-400' },
  blue: { ring: 'ring-blue-400/30', bg: 'bg-blue-400/15', text: 'text-blue-400' },
  yellow: { ring: 'ring-yellow-400/30', bg: 'bg-yellow-400/15', text: 'text-yellow-400' },
  green: { ring: 'ring-green-400/30', bg: 'bg-green-400/15', text: 'text-green-400' },
};

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function Collaborators() {
  return (
    <section id="collaborators" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <UsersRound className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Project <span className="text-primary">Collaborators</span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl">
            People I have built with — click a card to flip and see which projects we shipped together.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collaborators.map((person, idx) => {
            const style = accentStyles[person.accent];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="h-[280px]"
              >
                <InteractiveCard
                  variant="flip"
                  className="h-full"
                  backContent={
                    <div className={`glass-card p-6 h-full flex flex-col ring-1 ${style.ring}`}>
                      <p className={`text-xs font-mono uppercase tracking-wider mb-3 ${style.text}`}>
                        Built together
                      </p>
                      <ul className="space-y-2 flex-grow">
                        {person.projects.map((project) => (
                          <li
                            key={project}
                            className="text-sm text-white font-medium px-3 py-2 rounded-lg bg-dark-700/80 border border-white/5"
                          >
                            {project}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-gray-500 mt-4 text-center">Click to flip back</p>
                    </div>
                  }
                >
                  <div className={`glass-card p-6 h-full flex flex-col items-center text-center ring-1 ${style.ring}`}>
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4 ${style.bg} border border-white/10`}
                    >
                      {initials(person.name)}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{person.name}</h3>
                    <p className={`text-sm font-mono mb-6 ${style.text}`}>{person.role}</p>
                    <p className="text-xs text-gray-500 mt-auto">
                      {person.projects.length} shared project{person.projects.length !== 1 ? 's' : ''} · tap to flip
                    </p>
                    <div className="flex gap-3 mt-4" onClick={(e) => e.stopPropagation()}>
                      {person.github && (
                        <a
                          href={person.github}
                          className="p-2 rounded-lg bg-dark-700 text-gray-400 hover:text-white transition-colors"
                          aria-label={`${person.name} on GitHub`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {person.linkedin && (
                        <a
                          href={person.linkedin}
                          className="p-2 rounded-lg bg-dark-700 text-gray-400 hover:text-primary transition-colors"
                          aria-label={`${person.name} on LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </InteractiveCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
