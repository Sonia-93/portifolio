import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users } from 'lucide-react';
import InteractiveCard from './InteractiveCard';

export type Collaborator = {
  name: string;
  /** Short line on the front of the card */
  appreciation: string;
  /** Fuller note on the back — your gratitude for building together */
  gratitude: string;
  projects: string[];
  accent: 'primary' | 'accent' | 'pink' | 'blue' | 'yellow' | 'green';
};

export const collaborators: Collaborator[] = [
  {
    name: 'Hope Mutimutuje',
    appreciation: 'Steady, focused, and always there when the team needed you most.',
    gratitude:
      'Hope, your calm under pressure kept us grounded through every sprint. You showed up with focus and heart — I am proud of what we shipped together and grateful to have had you on the team.',
    projects: ['HerIngress', 'PTMS'],
    accent: 'primary',
  },
  {
    name: 'Nancy Stella Mizero',
    appreciation: 'You brought creativity and care to every screen we designed.',
    gratitude:
      'Nancy Stella, your eye for detail and your creative spirit made our work look and feel professional. Thank you for lifting the whole squad and for the passion you poured into every project.',
    projects: ['HerIngress', 'Nexfly Drones'],
    accent: 'pink',
  },
  {
    name: 'Irasubiza Saly Nelson',
    appreciation: 'Persistent problem-solver — you never left a bug unfinished.',
    gratitude:
      'Saly, your dedication to fixing hard problems made our codebase stronger. I appreciate how you stayed curious, kept digging, and helped the team cross the finish line every time.',
    projects: ['WasteNet', 'StaffNet'],
    accent: 'green',
  },
  {
    name: 'Kwizera Blaise',
    appreciation: 'Sharp thinker who turned tough ideas into working solutions.',
    gratitude:
      'Blaise, working with you meant complex requirements became real features. Your technical clarity and reliability made collaboration smooth — thank you for being a builder I could always count on.',
    projects: ['Gwiza AI', 'WasteNet'],
    accent: 'yellow',
  },
  {
    name: 'Forever Isezerano',
    appreciation: 'Positive energy and consistency — you made the grind feel lighter.',
    gratitude:
      'Forever, your reliability and good spirit kept morale high, even on long nights before demos. I value how you paired with anyone who needed help and never stopped until we delivered.',
    projects: ['StaffNet', 'PTMS'],
    accent: 'accent',
  },
  {
    name: 'Preciux Niyobyose',
    appreciation: 'Your curiosity pushed us further than we first planned to go.',
    gratitude:
      'Preciux, you asked the questions that made us think deeper and build better. I am thankful for your ideas, your drive, and the way you challenged us to grow as developers together.',
    projects: ['Gwiza AI', 'Nexfly Drones'],
    accent: 'blue',
  },
  {
    name: 'Umurerwa Aubierge',
    appreciation: 'You listen first, collaborate well, and deliver with heart.',
    gratitude:
      'Aubierge, you made teamwork feel natural — clear communication, respect, and real follow-through. I am grateful for your support on every build and proud to call you a collaborator and friend.',
    projects: ['HerIngress', 'StaffNet'],
    accent: 'primary',
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
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Project <span className="text-primary">Collaborators</span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            None of these builds would have been the same without this crew. Click a card to flip —
            you will see the projects we shipped together and a note of thanks for every person who
            stood beside me at Rwanda Coding Academy.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {collaborators.map((person, idx) => {
            const style = accentStyles[person.accent];
            return (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="min-h-[300px]"
              >
                <InteractiveCard
                  variant="flip"
                  className="h-full min-h-[300px]"
                  backContent={
                    <div className={`glass-card p-5 h-full min-h-[300px] flex flex-col ring-1 ${style.ring}`}>
                      <p className={`text-xs font-mono uppercase tracking-wider mb-2 flex items-center gap-1.5 ${style.text}`}>
                        <Heart className="w-3.5 h-3.5" /> Grateful for you
                      </p>
                      <p className="text-sm text-gray-300 leading-relaxed flex-grow mb-4">
                        {person.gratitude}
                      </p>
                      <p className={`text-xs font-mono uppercase tracking-wider mb-2 ${style.text}`}>
                        Built together
                      </p>
                      <ul className="space-y-1.5">
                        {person.projects.map((project) => (
                          <li
                            key={project}
                            className="text-xs text-white font-medium px-3 py-1.5 rounded-lg bg-dark-700/80 border border-white/5"
                          >
                            {project}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-gray-500 mt-3 text-center">Tap to flip back</p>
                    </div>
                  }
                >
                  <div
                    className={`glass-card p-5 h-full min-h-[300px] flex flex-col items-center text-center ring-1 ${style.ring}`}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white mb-3 ${style.bg} border border-white/10 shrink-0`}
                    >
                      {initials(person.name)}
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 leading-snug">{person.name}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                      &ldquo;{person.appreciation}&rdquo;
                    </p>
                    <p className="text-xs text-gray-500 mt-3">
                      {person.projects.join(' · ')} · tap to read more
                    </p>
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
