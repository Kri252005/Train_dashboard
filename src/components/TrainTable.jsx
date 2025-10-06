import React from 'react';
// This component assumes you pass data, search filters, and sorting functions as props
// For now, we use simple mock data for structure

const getStatusColor = (status) => {
  switch (status) {
    case 'Revenue': return 'bg-metro-green text-white';
    case 'Standby': return 'bg-yellow-500 text-yellow-900';
    case 'Maintenance': return 'bg-metro-red text-white';
    case 'Error': return 'bg-gray-500 text-white';
    default: return 'bg-gray-200 text-gray-800';
  }
};

const TrainTable = ({ data }) => {
  // You would normally use a state for sorting/filtering here

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Train ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mileage (km)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Assignment
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((train) => (
            <tr key={train.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {train.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-3 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(train.status)}`}>
                  {train.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {train.mileage_km.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {train.assignment || 'N/A'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button 
                  onClick={() => alert(`Showing details for ${train.id}`)}
                  className="text-metro-blue hover:text-metro-green transition-colors"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainTable;