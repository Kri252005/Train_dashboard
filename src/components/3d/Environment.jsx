
export default function Environment() {
  return (
    <>
      {/* Provides soft, ambient light to the whole scene */}
      <ambientLight intensity={0.5} />

      {/* A directional light, like the sun, to cast distinct shadows */}
      <directionalLight
        castShadow
        position={[8, 20, 5]} // Position the light source
        intensity={1.5}
        shadow-mapSize-width={2048} // Higher resolution shadows
        shadow-mapSize-height={2048}
      />

      {/* A simple ground plane that can receive shadows */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="ghostwhite" />
      </mesh>
    </>
  );
}
