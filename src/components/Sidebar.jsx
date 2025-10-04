import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { label: 'Trains', path: '/trains' },
    { label: 'Logs', path: '/logs' },
    { label: 'Depots', path: '/depots' },
    { label: 'Spare Parts', path: '/spares' },
    { label: 'Digital Twin', path: '/digital-twin' },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white px-6 py-8 hidden md:block">
      {/* Sidebar Title */}
      <h2 className="text-2xl font-bold text-white mb-10 tracking-tight">
        🚆 Train Dashboard
      </h2>

      {/* Navigation */}
      <nav className="flex flex-col gap-3">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? 'bg-yellow-400 text-gray-900'
                  : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;