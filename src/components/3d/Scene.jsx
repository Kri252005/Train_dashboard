
import { OrbitControls, Loader } from '@react-three/drei';
import { Suspense } from 'react';
import Environment from './Environment';
import Model from './Model'; // Your digital twin model component

export default function Scene() {
  return (
    <>
      {/* A loading screen while assets are being fetched */}
      <Suspense fallback={<Loader />}>
        {/* Your 3D Model */}
        <Model />

        {/* Lighting, floor, and helpers */}
        <Environment />
      </Suspense>

      {/* Camera controls to orbit around the scene */}
      <OrbitControls makeDefault />
    </>
  );
}
