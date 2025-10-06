export default function Logs() {
  const logs = [];
  return (
    <div>
      <h2>System Logs</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr><th>Time</th><th>Event</th><th>Level</th></tr>
        </thead>
        <tbody>
          {logs.map((log, i) => (
            <tr key={i}>
              <td>{log.time}</td><td>{log.event}</td><td>{log.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

