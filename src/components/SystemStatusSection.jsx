import React from 'react';
import { motion } from 'framer-motion';
import { Server } from 'lucide-react';
import { WebsiteStatus } from '@/components/WebsiteStatus';

export function SystemStatusSection({ sites, animationDelay = 0.1 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay }}
    >
      <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
        <Server className="w-5 h-5 mr-2 text-indigo-600" />
        System Status
      </h3>
      <div className="glass-card rounded-xl p-4">
        <div className="space-y-2">
          {sites.map((site) => (
            <WebsiteStatus key={site.name} name={site.name} url={site.url} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}