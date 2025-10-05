import React from 'react';

const Topbar = () => {
  // Mock Alert Data - This will be replaced by /api/alerts
  const alertCount = 2; 

  return (
    <header className="flex justify-between items-center p-4 bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-glass relative z-10">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-blue-50/50 backdrop-blur-sm"></div>
      
      <div className="relative z-10 text-2xl font-bold bg-gradient-to-r from-slate-800 via-metro-blue-700 to-metro-purple-700 bg-clip-text text-transparent animate-fade-in">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-metro-blue-500 to-metro-green-500 rounded-xl flex items-center justify-center shadow-3d animate-float">
            <span className="text-white text-lg">⚡</span>
          </div>
          Operations Command Center
        </div>
      </div>
      
      <div className="relative z-10 flex items-center space-x-4">
        {/* Real-time status indicator */}
        <div className="flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-metro-green-50 to-metro-blue-50 rounded-full border border-metro-green-200/50 shadow-3d">
          <div className="w-2 h-2 bg-metro-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-metro-green-700">Live</span>
        </div>
        
        {/* Alerts Button */}
        <button className="group relative p-3 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 text-yellow-700 hover:from-yellow-100 hover:to-orange-100 transition-all duration-300 transform hover:scale-105 hover:shadow-3d-hover border border-yellow-200/50">
          <div className="flex items-center space-x-2">
            <span className="text-lg group-hover:animate-bounce-slow">🔔</span>
            <span className="font-medium">Alerts</span>
          </div>
          {alertCount > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-gradient-to-r from-metro-red-500 to-metro-red-600 rounded-full shadow-neon animate-pulse-slow">
              {alertCount}
            </span>
          )}
        </button>
        
        {/* User / Auth Section */}
        <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-slate-200/50 shadow-3d">
          <div className="w-8 h-8 bg-gradient-to-br from-metro-blue-400 to-metro-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-3d">
            S
          </div>
          <div className="text-sm font-medium text-slate-700">
            <span className="text-metro-blue-700 font-semibold">Supervisor</span>
            <span className="mx-2 text-slate-400">|</span>
            <button className="text-metro-red-600 hover:text-metro-red-700 transition-colors duration-200 font-medium hover:underline">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;