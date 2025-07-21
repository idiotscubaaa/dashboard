import React from 'react';
import { Globe, Cake } from 'lucide-react';
export function AppHeader() {
  return <header className="glass-card border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Max Holding Homepage</h1>
              <p className="text-sm text-slate-600">Welcome to your internal hub</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 bg-amber-100/50 border border-amber-200 text-amber-800 rounded-full px-4 py-1.5">
              <Cake className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium">Happy Birthday, Jane Doe! 🎉</span>
            </div>
            <img className="h-8 w-auto" alt="Company logo" src="https://images.unsplash.com/photo-1585065799297-ce07d1855c01" />
          </div>
        </div>
      </div>
    </header>;
}