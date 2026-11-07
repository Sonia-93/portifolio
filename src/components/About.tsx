import React from 'react';
import { motion } from 'framer-motion';
import { profileImg } from '../images';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-400 leading-relaxed"
          >
            <p>
              Hello! I'm <strong className="text-white">Shimirwa Teta Sonia</strong>, a passionate Backend Developer and Cyber Security Enthusiast currently studying at the prestigious <strong className="text-primary">Rwanda Coding Academy</strong>.
            </p>
            <p>
              My journey in tech is driven by a fascination with how systems work under the hood and how to protect them from malicious threats. I specialize in building scalable server-side applications, cross-platform mobile apps using Kotlin and React Native, and implementing robust security measures to safeguard data integrity.
            </p>
            <p>
              When I'm not writing APIs or configuring databases, you can find me participating in CTF (Capture The Flag) challenges, analyzing network traffic, or exploring the latest vulnerabilities in the cybersecurity landscape.
            </p>
          </motion.div>

          {/* Right — profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_6s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-accent/20 animate-[spin_10s_linear_infinite_reverse]"></div>
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-dark-700 bg-dark-800 group">
                <img
                  src={profileImg}
                  alt="Shimirwa Teta Sonia"
                  className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
