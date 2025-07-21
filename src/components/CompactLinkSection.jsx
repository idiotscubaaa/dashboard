import React from 'react';
import { motion } from 'framer-motion';
import { CompactLinkCard } from '@/components/CompactLinkCard';
import { cn } from '@/lib/utils';

export function CompactLinkSection({ title, icon: Icon, iconColor, links, isExternal = false, animationDelay = 0.2 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay }}
    >
      <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
        <Icon className={cn("w-5 h-5 mr-2", iconColor)} />
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {links.map((link, index) => (
          <CompactLinkCard key={index} item={link} isExternal={isExternal} />
        ))}
      </div>
    </motion.section>
  );
}