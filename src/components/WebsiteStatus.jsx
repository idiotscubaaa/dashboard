import React from 'react';
import { motion } from 'framer-motion';
import { useWebsiteStatus } from '@/hooks/useWebsiteStatus';
import { cn } from '@/lib/utils';

const statusConfig = {
  Checking: {
    label: 'Checking...',
    dotClass: 'bg-yellow-500 animate-pulse',
    textClass: 'text-yellow-600',
  },
  Operational: {
    label: 'Operational',
    dotClass: 'bg-green-500',
    textClass: 'text-green-600',
  },
  Down: {
    label: 'Down',
    dotClass: 'bg-red-500',
    textClass: 'text-red-600',
  },
};

export function WebsiteStatus({ name, url }) {
  const { status, ping } = useWebsiteStatus(url);

  const config = statusConfig[status];

  return (
    <div className="flex items-center justify-between p-2 rounded-lg transition-colors hover:bg-slate-50/50 text-sm">
      <div className="flex items-center space-x-3">
        <div className="w-2 h-2 rounded-full transition-colors" style={{ backgroundColor: 'transparent' }}>
          <motion.div
            className={cn('w-2 h-2 rounded-full', config.dotClass)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <span className="font-medium text-slate-700">{name}</span>
      </div>
      <div className="flex items-center space-x-3">
        <motion.span
          key={status}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn('font-semibold', config.textClass)}
        >
          {config.label}
        </motion.span>
        <div className="w-16 text-right">
          {status === 'Operational' && ping !== null && (
            <motion.span
              key={ping}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-slate-500"
            >
              {ping} ms
            </motion.span>
          )}
        </div>
      </div>
    </div>
  );
}