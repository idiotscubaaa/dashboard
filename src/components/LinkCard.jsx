import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export function LinkCard({ item, isExternal = false }) {
  const handleClick = () => {
    if (isExternal) {
      window.open(item.url, '_blank');
    } else if (item.action) {
      item.action();
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="glass-card rounded-xl p-6 hover-lift cursor-pointer group"
      onClick={handleClick}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color || 'from-blue-500 to-blue-600'} text-white`}>
          <item.icon className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>
            {isExternal && <ExternalLink className="w-4 h-4 text-slate-400" />}
          </div>
          <p className="text-sm text-slate-600 mt-1">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}