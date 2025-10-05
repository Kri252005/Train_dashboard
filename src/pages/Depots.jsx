import React from 'react';
import { depotsData } from '../data/depotsData.js';

const Depots = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">Depot Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {depotsData.map((depot) => (
          <div key={depot.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-metro-blue">{depot.name}</h2>
                <p className="text-sm text-gray-500">Supervisor: {depot.supervisor}</p>
              </div>
              <span className={`px-3 py-1 text-sm font-semibold rounded-full ${depot.status === 'Operational' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {depot.status}
              </span>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Capacity & Utilization</h3>
              <div className="w-full bg-gray-200 rounded-full h-6">
                <div 
                  className="bg-metro-green h-6 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ width: `${(depot.currentTrains / depot.capacity) * 100}%` }}
                >
                  {`${depot.currentTrains} / ${depot.capacity}`}
                </div>
              </div>
              <p className="text-right text-sm text-gray-600 mt-1">
                {`(${( (depot.currentTrains / depot.capacity) * 100).toFixed(1)}%)`}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Future Expansion</h3>
        <p className="text-gray-600">
          The system is designed to scale with the addition of a third depot and a fleet of up to 40 trainsets, ensuring long-term operational efficiency.
        </p>
      </div>
    </div>
  );
};

export default Depots;