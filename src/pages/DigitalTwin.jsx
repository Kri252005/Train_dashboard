
import { Canvas } from '@react-three/fiber';
import Scene from '../components/3d/Scene'; // Assuming components are in `src/components`

export default function DigitalTwin() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Digital Twin Viewer 🤖</h1>
      <p>An interactive 3D model rendered with React Three Fiber.</p>

      {/* This div is the container for your 3D canvas */}
      <div style={{ height: '75vh', width: '100%', background: '#E0E0E0', borderRadius: '8px' }}>
        <Canvas
          shadows // Enable shadows globally
          camera={{ position: [4, 4, 6], fov: 50 }} // Set initial camera position and field-of-view
        >
          <Scene />
        </Canvas>
      </div>
    </div>
  );
}
