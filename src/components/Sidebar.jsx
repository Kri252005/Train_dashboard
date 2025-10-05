import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// Using simple SVG icons, replace with a library like react-icons if preferred

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: '📊' },
  { name: 'Train Schedule', path: '/trains', icon: '🚆' },
  { name: 'Depots', path: '/depots', icon: '🏢' },
  { name: '3D Digital Twin', path: '/twin', icon: '🎨' },
  { name: 'Spare Parts AI', path: '/spares', icon: '⚙️' },
  { name: 'System Logs', path: '/logs', icon: '📜' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col w-64 bg-gradient-to-b from-slate-900/95 to-slate-800/95 backdrop-blur-xl text-white shadow-3d border-r border-white/10 relative z-20">
      {/* Header with glass effect */}
      <div className="p-6 text-xl font-bold border-b border-white/20 bg-gradient-to-r from-metro-blue-600/20 to-metro-purple-600/20 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-metro-blue-400 to-metro-green-400 rounded-lg flex items-center justify-center text-sm animate-pulse-slow">
            🚆
          </div>
          <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            KMRL-OptiRake
          </span>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item, index) => (
          <Link
            key={item.name}
            to={item.path}
            className={`group flex items-center p-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:translate-x-1 animate-slide-up relative overflow-hidden
              ${location.pathname === item.path 
                ? 'bg-gradient-to-r from-metro-green-500/30 to-metro-blue-500/30 text-white font-semibold shadow-neon border border-metro-green-400/30' 
                : 'hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:shadow-3d hover:border hover:border-white/20'}`
            }
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Background glow effect for active item */}
            {location.pathname === item.path && (
              <div className="absolute inset-0 bg-gradient-to-r from-metro-green-500/20 to-metro-blue-500/20 blur-xl"></div>
            )}
            
            <span className="relative mr-3 text-lg group-hover:animate-bounce-slow transition-transform duration-300">
              {item.icon}
            </span>
            <span className="relative group-hover:text-white transition-colors duration-300">
              {item.name}
            </span>
            
            {/* Hover indicator */}
            <div className="absolute right-2 w-2 h-2 bg-metro-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </Link>
        ))}
      </nav>
      
      {/* Footer with version info */}
      <div className="p-4 border-t border-white/20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="text-xs text-gray-300 text-center">
          <div className="flex items-center justify-center space-x-2 mb-1">
            <div className="w-2 h-2 bg-metro-green-400 rounded-full animate-pulse"></div>
            <span>System Online</span>
          </div>
          <div>v2.1.0 | Operations Center</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;