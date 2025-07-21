import React from 'react';
import { motion } from 'framer-motion';
import { LinkCard } from '@/components/LinkCard';
import { cn } from '@/lib/utils';

export function LinkSection({ title, icon: Icon, iconColor, links, isExternal = false, animationDelay = 0.2, fullWidth = false }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      className={cn(fullWidth && 'md:col-span-2')}
    >
      <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
        <Icon className={cn("w-5 h-5 mr-2", iconColor)} />
        {title}
      </h3>
      <div className={cn(
          "space-y-4",
          fullWidth && "grid grid-cols-1 md:grid-cols-2 gap-4 space-y-0"
      )}>
        {links.map((link, index) => (
          <LinkCard key={index} item={link} isExternal={isExternal} />
        ))}
      </div>
    </motion.section>
  );
}