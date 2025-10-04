import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function TrainCube({ position, color }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function DigitalTwin() {
  const trainPositions = [
    { id: 'Port001', x: 0, z: 0, status: 'Revenue' },
    { id: 'Port002', x: 2, z: 0, status: 'Idle' },
  ];

  const statusColor = {
    Revenue: 'green',
    Idle: 'yellow',
    'Under Maintenance': 'red'
  };

  return (
    <div style={{ height: '500px' }}>
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight />
        <OrbitControls />
        {trainPositions.map((train, i) => (
          <TrainCube
            key={i}
            position={[train.x, 0.5, train.z]}
            color={statusColor[train.status]}
          />
        ))}
      </Canvas>
    </div>
  );
}
export default DigitalTwin;