import React from 'react';
import { motion } from 'framer-motion';
import InteractiveCard from './InteractiveCard';

const skillCategories = [
  {
    title: "Backend Development",
    skills: ["Node.js", "Python", "Express.js", "RESTful APIs", "Authentication & Authorization"]
  },
  {
    title: "Mobile Development",
    skills: ["Kotlin", "React Native", "Android Studio", "TypeScript"]
  },
  {
    title: "Database Management",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Database Design"]
  },
  {
    title: "Cyber Security",
    skills: ["Penetration Testing", "Cryptography", "Network Security", "Linux/Unix"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git & GitHub", "Docker", "AWS (Basic)"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-dark-800/50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-primary">Arsenal</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <InteractiveCard className="rounded-2xl">
                <div className="glass-card p-6 hover:border-primary/30 transition-colors h-full">
                  <h3 className="text-xl font-semibold text-white mb-6 font-mono">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-3 text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </InteractiveCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}