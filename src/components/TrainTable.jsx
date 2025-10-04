function TrainTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto text-sm text-left">
        <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase text-xs tracking-wider">
          <tr>
            <th className="px-4 py-3 border">Train ID</th>
            <th className="px-4 py-3 border">Status</th>
            <th className="px-4 py-3 border text-right">Mileage (km)</th>
            <th className="px-4 py-3 border">Contract</th>
          </tr>
        </thead>
        <tbody>
          {data.map((train, i) => (
            <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-200 ease-in-out">
              <td className="px-4 py-3 border font-medium text-gray-700 dark:text-gray-200">
                {train.train_id}
              </td>
              <td className="px-4 py-3 border">
                <span
                  className={`px-2 py-1 rounded-full text-white text-xs font-semibold ${
                    train.current_status === 'Revenue'
                      ? 'bg-green-500'
                      : train.current_status === 'Idle'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                >
                  {train.current_status}
                </span>
              </td>
              <td className="px-4 py-3 border text-right text-gray-700 dark:text-gray-200">
                {train.mileage_km.toLocaleString()}
              </td>
              <td className="px-4 py-3 border text-gray-700 dark:text-gray-200">
                {train.branding_contract}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrainTable;