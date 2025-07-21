import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';

export function CtaSection({ animationDelay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      className="mt-12"
    >
      <div className="glass-card rounded-xl p-8 text-center">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">
          Need immediate assistance?
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.open('mailto:support@company.com', '_blank')}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            <Mail className="w-4 h-4 mr-2" />
            Email Support
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open('tel:+15551234567', '_blank')}
            className="border-blue-200 text-blue-700 hover:bg-blue-50"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Help Desk
          </Button>
        </div>
      </div>
    </motion.section>
  );
}