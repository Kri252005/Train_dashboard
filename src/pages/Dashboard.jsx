import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [metrics] = useState({
    activeTrains: 24,
    onTimePerformance: 94.2,
    totalPassengers: 15420,
    systemHealth: 98.7,
    alerts: 2,
    energyEfficiency: 87.3
  });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const MetricCard = ({ title, value, unit, icon, color, trend, description }) => (
    <div className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-3d hover:shadow-3d-hover transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20 overflow-hidden animate-scale-in">
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      {/* Floating particles effect */}
      <div className="absolute top-2 right-2 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white text-xl shadow-3d group-hover:animate-bounce-slow`}>
            {icon}
          </div>
          {trend && (
            <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${trend > 0 ? 'bg-metro-green-100 text-metro-green-700' : 'bg-metro-red-100 text-metro-red-700'}`}>
              <span>{trend > 0 ? '↗' : '↘'}</span>
              <span>{Math.abs(trend)}%</span>
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors">{title}</h3>
          <div className="flex items-baseline space-x-1">
            <span className="text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300">
              {value}
            </span>
            {unit && <span className="text-lg text-gray-500">{unit}</span>}
          </div>
          {description && (
            <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors">{description}</p>
          )}
        </div>
      </div>
    </div>
  );

  const QuickActionCard = ({ title, description, icon, color, onClick }) => (
    <button 
      onClick={onClick}
      className="group relative w-full bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-3d hover:shadow-3d-hover transition-all duration-300 transform hover:scale-105 border border-white/20 text-left overflow-hidden animate-slide-up"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      <div className="relative z-10 flex items-center space-x-4">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white text-2xl shadow-3d group-hover:animate-float`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300">
            {title}
          </h3>
          <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{description}</p>
        </div>
        <div className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300">
          →
        </div>
      </div>
    </button>
  );

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-metro-blue-700 to-metro-purple-700 bg-clip-text text-transparent animate-slide-up">
            Operations Dashboard
          </h1>
          <p className="text-gray-600 mt-2 animate-slide-up" style={{ animationDelay: '100ms' }}>
            Real-time monitoring and control center
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl px-6 py-3 shadow-3d border border-white/20 animate-scale-in">
            <div className="text-sm text-gray-600">Current Time</div>
            <div className="text-xl font-bold text-gray-900">
              {currentTime.toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard
          title="Active Trains"
          value={metrics.activeTrains}
          icon="🚆"
          color="from-metro-blue-500 to-metro-blue-600"
          trend={2.1}
          description="Currently in operation"
        />
        <MetricCard
          title="On-Time Performance"
          value={metrics.onTimePerformance}
          unit="%"
          icon="⏱️"
          color="from-metro-green-500 to-metro-green-600"
          trend={1.3}
          description="Last 24 hours"
        />
        <MetricCard
          title="Total Passengers"
          value={metrics.totalPassengers.toLocaleString()}
          icon="👥"
          color="from-metro-purple-500 to-metro-purple-600"
          trend={5.2}
          description="Today's ridership"
        />
        <MetricCard
          title="System Health"
          value={metrics.systemHealth}
          unit="%"
          icon="💚"
          color="from-metro-cyan-500 to-metro-cyan-600"
          trend={0.8}
          description="Overall system status"
        />
        <MetricCard
          title="Active Alerts"
          value={metrics.alerts}
          icon="🔔"
          color="from-yellow-500 to-orange-500"
          trend={-12.5}
          description="Requires attention"
        />
        <MetricCard
          title="Energy Efficiency"
          value={metrics.energyEfficiency}
          unit="%"
          icon="⚡"
          color="from-green-500 to-emerald-600"
          trend={3.2}
          description="Power optimization"
        />
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 animate-slide-up">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <QuickActionCard
            title="Train Schedule"
            description="View and manage train schedules"
            icon="📅"
            color="from-metro-blue-500 to-metro-blue-600"
            onClick={() => console.log('Navigate to trains')}
          />
          <QuickActionCard
            title="System Monitoring"
            description="Real-time system health dashboard"
            icon="📊"
            color="from-metro-green-500 to-metro-green-600"
            onClick={() => console.log('Navigate to monitoring')}
          />
          <QuickActionCard
            title="Digital Twin"
            description="3D visualization and simulation"
            icon="🗺️"
            color="from-metro-purple-500 to-metro-purple-600"
            onClick={() => console.log('Navigate to digital twin')}
          />
          <QuickActionCard
            title="3D Space"
            description="Interactive 3D modeling environment"
            icon="🎨"
            color="from-metro-cyan-500 to-metro-purple-600"
            onClick={() => console.log('Navigate to 3D space')}
          />
          <QuickActionCard
            title="Maintenance Logs"
            description="Track maintenance and repairs"
            icon="🔧"
            color="from-metro-cyan-500 to-metro-cyan-600"
            onClick={() => console.log('Navigate to logs')}
          />
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-3d border border-white/20 animate-slide-up">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-metro-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">All Systems Operational</span>
          </div>
          <div className="text-sm text-gray-500">
            Last updated: {currentTime.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
