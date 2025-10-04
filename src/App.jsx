import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Trains from './pages/Trains';
import Logs from './pages/Logs';
import Depots from './pages/Depots';
import Spares from './pages/Spares';
import DigitalTwin from './pages/DigitalTwin';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="flex">
        {sidebarOpen && <Sidebar />}
        <div className="flex-1 bg-gray-100 min-h-screen">
          <Topbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Trains />} />
              <Route path="/trains" element={<Trains />} />
              <Route path="/logs" element={<Logs />} />
              <Route path="/depots" element={<Depots />} />
              <Route path="/spares" element={<Spares />} />
              <Route path="/digital-twin" element={<DigitalTwin />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;