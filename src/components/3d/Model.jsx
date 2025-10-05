
import React from 'react';

export default function Model(props) {
  // The following code is for loading a glTF model.
  // It is commented out because a model is not available.
  // Please replace this with your own model.
  //
  // // Load the 3D model. Make sure the path is correct (place it in the /public/models folder)
  // const { scene } = useGLTF('/models/your-digital-twin.glb');
  //
  // // This effect runs once when the model is loaded
  // useEffect(() => {
  //   // Traverse the scene graph
  //   scene.traverse((child) => {
  //     // If the child is a mesh, enable shadow casting and receiving
  //     if (child.isMesh) {
  //       child.castShadow = true;
  //       child.receiveShadow = true;
  //     }
  //   });
  // }, [scene]);
  //
  // // 'primitive' is used to render a pre-existing object scene
  // // We scale it down and pass any other props
  // return <primitive object={scene} scale={0.5} {...props} />;

  // Placeholder model
  return (
    <mesh {...props} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 2]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

// Preload the model for faster access
// useGLTF.preload('/models/your-digital-twin.glb');
