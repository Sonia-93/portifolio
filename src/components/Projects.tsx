import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, CheckSquare, Plane, Trash2, Users, Building2, Brain, Zap, Swords, Lock, Clock, Flame, MousePointerClick } from 'lucide-react';
import InteractiveCard from './InteractiveCard';

const projects = [
  {
    title: "PTMS — Personal Task Management System",
    description: "A productivity-first task manager that keeps you in control of your day. Features a real-time dashboard with live task updates, priority-based organization (urgent, high, medium, low), progress tracking, and deadline reminders — so nothing slips through the cracks.",
    tags: ["React", "Node.js", "WebSockets", "PostgreSQL", "Dashboard"],
    icon: <CheckSquare className="w-8 h-8 text-primary" />,
    github: "#",
    demo: "#",
  },
  {
    title: "Nexfly Drones",
    description: "A sleek e-commerce platform built for drone enthusiasts and professionals alike. Browse, compare, and purchase drones with detailed specs, category filters, and a smooth checkout experience — all wrapped in a modern, high-performance web interface.",
    tags: ["React", "E-commerce", "REST API", "Tailwind CSS"],
    icon: <Plane className="w-8 h-8 text-accent" />,
    github: "#",
    demo: "#",
  },
  {
    title: "WasteNet",
    description: "An AI-powered waste management system that classifies waste into plastic, paper, biodegradable, non-biodegradable, metals, and more using smart bins. A real-time dashboard tracks waste levels, collection status, and environmental impact across locations.",
    tags: ["Python", "TensorFlow", "IoT", "Real-time Dashboard", "AI"],
    icon: <Trash2 className="w-8 h-8 text-green-400" />,
    github: "#",
    demo: "#",
  },
  {
    title: "HerIngress",
    description: "An AI-powered platform built to empower women across every field. Features inspiring role model stories, field-specific opportunities, real-time group chats where girls collaborate and invite mentors, and Asha AI — a personal assistant that guides each user on their unique journey.",
    tags: ["React", "AI", "Real-time Chat", "Node.js", "MongoDB"],
    icon: <Users className="w-8 h-8 text-pink-400" />,
    github: "#",
    demo: "#",
  },
  {
    title: "StaffNet",
    description: "A digital operations system designed for RCA staff to ditch the paperwork. Manages student tickets, borrowed phones, and student funds all in one place — streamlining daily administrative tasks with a clean, intuitive interface that saves time and reduces errors.",
    tags: ["React", "Node.js", "PostgreSQL", "Admin Dashboard"],
    icon: <Building2 className="w-8 h-8 text-blue-400" />,
    github: "#",
    demo: "#",
  },
  {
    title: "Gwiza AI",
    description: "An AI-powered recruitment platform that takes the guesswork out of hiring. Automatically ranks applicants and surfaces the top 10–20 candidates, complete with a breakdown of each person's strengths, weaknesses, and the reasoning behind their ranking — helping recruiters make faster, fairer decisions.",
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "REST API", "TypeScript"],
    icon: <Brain className="w-8 h-8 text-yellow-400" />,
    github: "#",
    demo: "#",
  },
];

const comingSoon = [
  {
    title: "Zip Connector",
    description: "A seamless integration platform that connects your favorite tools and services in one place — automating workflows and eliminating the friction between apps.",
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    color: "yellow",
    progress: 35,
  },
  {
    title: "ZeroBite",
    description: "A smart nutrition and meal planning platform that helps you track what you eat, discover healthy recipes, and build better eating habits — one bite at a time.",
    icon: (
      <div className="relative">
        <Swords className="w-8 h-8 text-orange-400" />
        <Flame className="w-4 h-4 text-red-500 absolute -top-1 -right-2 animate-pulse" />
      </div>
    ),
    progress: 20,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-4"></div>
          <p className="text-gray-400 flex items-center gap-2 text-sm">
            <MousePointerClick className="w-4 h-4 text-primary shrink-0" />
            Click any card — it wiggles, lifts, then settles. Hover to preview the motion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <InteractiveCard className="h-full rounded-2xl">
                <div className="glass-card p-8 flex flex-col h-full group">
                  <div className="mb-6">{project.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded-md bg-dark-700 text-xs font-mono text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a href={project.demo} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </InteractiveCard>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="flex items-center gap-3 mb-10">
            <Clock className="w-5 h-5 text-accent" />
            <h3 className="text-2xl font-bold text-white">Coming <span className="text-primary">Soon</span></h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent ml-2"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {comingSoon.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-dark-800/50 p-8 group"
              >
                <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${project.color === 'yellow' ? 'bg-yellow-400' : 'bg-orange-400'}`}></div>

                <div className="relative z-10 flex items-start gap-5">
                  <div className={`p-3 rounded-xl border ${project.color === 'yellow' ? 'bg-yellow-400/10 border-yellow-400/20' : 'bg-orange-400/10 border-orange-400/20'}`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h4 className="text-lg font-bold text-white">{project.title}</h4>
                      <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono border border-primary/30 text-primary bg-primary/10">
                        <Lock className="w-3 h-3" /> In Development
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-6">
                  <div className="flex justify-between text-xs text-gray-500 font-mono mb-1.5">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className={`h-full rounded-full ${project.color === 'yellow' ? 'bg-yellow-400' : 'bg-orange-400'}`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
