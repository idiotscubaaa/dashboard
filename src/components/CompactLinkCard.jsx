import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export function CompactLinkCard({ item, isExternal = false }) {
  const handleClick = () => {
    if (isExternal) {
      window.open(item.url, '_blank');
    } else if (item.action) {
      item.action();
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="glass-card rounded-lg p-3 hover-lift cursor-pointer group"
      onClick={handleClick}
    >
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-md bg-gradient-to-r ${item.color || 'from-slate-500 to-slate-600'} text-white`}>
          <item.icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm text-slate-800 group-hover:text-blue-600 transition-colors truncate">
              {item.title}
            </h3>
            {isExternal && <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 ml-1" />}
          </div>
        </div>
      </div>
    </motion.div>
  );
}