import React from 'react';
import { Button } from '@/components/ui/button';

export function AppFooter({ handlePlaceholderClick }) {
  return (
    <footer className="glass-card border-t border-white/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <span className="text-sm text-slate-600">
              © 2025 Max Holding Portal
            </span>
            <span className="text-xs text-slate-500 block sm:inline sm:ml-4">
              Version 1.2.1
            </span>
          </div>
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handlePlaceholderClick("Update Logs")}
              className="text-slate-600 hover:text-blue-600"
            >
              Update Logs
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handlePlaceholderClick("Internal News")}
              className="text-slate-600 hover:text-blue-600"
            >
              Internal News
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}