import { useState } from 'react';
import TrainTable from '../components/TrainTable';
import { trains } from '../mockData';

function Trains() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTrains = trains.filter((train) =>
    train.train_id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalTrains = trains.length;
  const activeTrains = trains.filter(t => t.current_status === 'Revenue').length;
  const idleTrains = trains.filter(t => t.current_status === 'Idle').length;

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto dark:bg-gray-900">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          🚆 Train Dashboard
        </h1>
        <span className="text-sm text-gray-500 dark:text-gray-300">
          Last updated: Oct 4, 2025
        </span>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 text-center">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Trains</h3>
          <p className="text-2xl font-bold text-gray-800 dark:text-white">{totalTrains}</p>
        </div>
        <div className="bg-green-100 dark:bg-green-900 shadow rounded-lg p-4 text-center">
          <h3 className="text-sm font-medium text-green-700 dark:text-green-300">Active (Revenue)</h3>
          <p className="text-2xl font-bold text-green-800 dark:text-green-100">{activeTrains}</p>
        </div>
        <div className="bg-yellow-100 dark:bg-yellow-900 shadow rounded-lg p-4 text-center">
          <h3 className="text-sm font-medium text-yellow-700 dark:text-yellow-300">Idle</h3>
          <p className="text-2xl font-bold text-yellow-800 dark:text-yellow-100">{idleTrains}</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by Train ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
        />
      </div>

      {/* Train Table Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Train Overview</h2>
        <TrainTable data={filteredTrains} />
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-gray-400 dark:text-gray-500">
        © 2025 TrainOps Dashboard.
      </footer>
    </div>
  );
}

export default Trains;