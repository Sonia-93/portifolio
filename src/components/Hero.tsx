import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, ArrowRight, Smartphone } from 'lucide-react';

const backendWords = [
  'REST API', 'PostgreSQL', 'Node.js', 'Express.js', 'MongoDB',
  'JWT', 'WebSockets', 'Docker', 'Redis', 'TypeScript',
  'Microservices', 'OAuth2', 'GraphQL', 'Prisma', 'Nginx',
  'Linux', 'CI/CD', 'Git', 'Firebase', 'Next.js',
  'async/await', 'HTTP/2', 'SSL/TLS', 'Bcrypt', 'Swagger',
  'MVC', 'ORM', 'Caching', 'Load Balancer', 'Kubernetes',
];

function FloatingWord({ word, index }: { word: string; index: number }) {
  const angle = (index / backendWords.length) * 360;
  const radius = 38 + (index % 3) * 10;
  const rad = (angle * Math.PI) / 180;
  const x = 50 + radius * Math.cos(rad);
  const y = 50 + radius * Math.sin(rad);
  const size = index % 4 === 0 ? 'text-sm' : index % 3 === 0 ? 'text-xs' : 'text-[11px]';
  const color = index % 3 === 0 ? 'text-primary' : index % 2 === 0 ? 'text-gray-300/80' : 'text-gray-400/60';

  return (
    <motion.span
      className={`absolute font-mono font-medium select-none pointer-events-none ${size} ${color}`}
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)', animation: 'spin 20s linear infinite reverse' }}
    >
      {word}
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-white/10 text-xs font-mono text-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Backend Developer
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <br />
            <span className="text-gradient">Shimirwa Teta Sonia</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            Backend Developer, Mobile App Developer & Cyber Security Enthusiast. Building robust architectures, cross-platform mobile apps, and securing digital perimeters.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-dark-800 text-white font-medium border border-white/10 hover:border-white/30 transition-colors">
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm font-mono text-gray-500">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-primary" /> Backend Eng.
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" /> InfoSec
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-blue-400" /> Mobile Dev
            </div>
          </div>
        </motion.div>

        {/* Floating code globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative hidden md:flex items-center justify-center"
        >
          <div className="relative w-full h-[480px]">
            {/* Glow center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/10 border border-primary/20 blur-sm"></div>
            </div>
            {/* Orbiting rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full border border-primary/20 animate-[spin_6s_linear_infinite]"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full border border-accent/20 animate-[spin_10s_linear_infinite_reverse]"></div>
            </div>
            {/* Floating words — clockwise orbit */}
            <div
              className="absolute inset-0 group-hover:[animation-play-state:paused]"
              style={{ animation: 'spin 20s linear infinite' }}
              onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
              onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
            >
              {backendWords.map((word, i) => (
                <FloatingWord key={word} word={word} index={i} />
              ))}
            </div>
            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-primary font-mono text-xs tracking-widest uppercase opacity-60">stack</p>
                <p className="text-white font-bold text-lg font-mono">&lt;/backend&gt;</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
