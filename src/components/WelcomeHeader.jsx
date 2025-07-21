import React from 'react';
import { motion } from 'framer-motion';
export function WelcomeHeader() {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }} className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
        Welcome to the Network Portal
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">Your central hub for accessing company resources, tools, and getting support.</p>
    </motion.div>;
}