import React, { useRef, useEffect, useState } from 'react';

const ThreeScene = ({ 
  width = '100%', 
  height = '400px', 
  backgroundColor = '#0f172a',
  showGrid = true,
  showAxes = false,
  cameraPosition = { x: 5, y: 5, z: 5 },
  children 
}) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationIdRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Always use CSS 3D fallback for now - Three.js integration can be added later
    setIsLoading(false);
    return () => {
      cleanup();
    };
  }, []);

  const initThreeJS = () => {
    try {
      const THREE = window.THREE;
      
      // Scene setup
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(backgroundColor);
      sceneRef.current = scene;

      // Camera setup
      const camera = new THREE.PerspectiveCamera(
        75,
        mountRef.current.clientWidth / mountRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
      cameraRef.current = camera;

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      rendererRef.current = renderer;

      // Add renderer to DOM
      mountRef.current.appendChild(renderer.domElement);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(10, 10, 5);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.width = 2048;
      directionalLight.shadow.mapSize.height = 2048;
      scene.add(directionalLight);

      // Grid helper
      if (showGrid) {
        const gridHelper = new THREE.GridHelper(20, 20, 0x3b82f6, 0x1e40af);
        gridHelper.material.opacity = 0.3;
        gridHelper.material.transparent = true;
        scene.add(gridHelper);
      }

      // Axes helper
      if (showAxes) {
        const axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper);
      }

      // Controls (if OrbitControls is available)
      if (THREE.OrbitControls) {
        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = true;
        controls.enablePan = true;
        controls.maxPolarAngle = Math.PI / 2;
      }

      // Sample 3D objects for demonstration
      addSampleObjects(scene);

      // Animation loop
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);
        
        if (THREE.OrbitControls && cameraRef.current) {
          // Update controls if available
        }
        
        renderer.render(scene, camera);
      };

      animate();
      setIsLoading(false);

    } catch (err) {
      console.error('Three.js initialization error:', err);
      setError(err.message);
      setIsLoading(false);
    }
  };

  const addSampleObjects = (scene) => {
    const THREE = window.THREE;
    
    // Sample cube
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.8
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-2, 0.5, 0);
    cube.castShadow = true;
    cube.receiveShadow = true;
    scene.add(cube);

    // Sample sphere
    const sphereGeometry = new THREE.SphereGeometry(0.7, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x10b981,
      transparent: true,
      opacity: 0.8
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(2, 0.7, 0);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    scene.add(sphere);

    // Sample cylinder (representing a train car)
    const cylinderGeometry = new THREE.CylinderGeometry(0.3, 0.3, 2, 16);
    const cylinderMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xa855f7,
      transparent: true,
      opacity: 0.8
    });
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder.position.set(0, 0.3, 2);
    cylinder.rotation.z = Math.PI / 2;
    cylinder.castShadow = true;
    cylinder.receiveShadow = true;
    scene.add(cylinder);

    // Ground plane
    const planeGeometry = new THREE.PlaneGeometry(20, 20);
    const planeMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x1e293b,
      transparent: true,
      opacity: 0.5
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.receiveShadow = true;
    scene.add(plane);
  };

  const cleanup = () => {
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }
    
    if (rendererRef.current && mountRef.current) {
      mountRef.current.removeChild(rendererRef.current.domElement);
      rendererRef.current.dispose();
    }
  };

  const handleResize = () => {
    if (cameraRef.current && rendererRef.current && mountRef.current) {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // CSS 3D Fallback when Three.js is not available
  const CSS3DFallback = () => (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl overflow-hidden perspective-1000">
      {/* 3D Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 400 300">
          <defs>
            <pattern id="grid3d" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="0.5"/>
            </pattern>
            <linearGradient id="depth" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid3d)" />
          <rect width="100%" height="100%" fill="url(#depth)" />
        </svg>
      </div>

      {/* 3D Objects using CSS transforms */}
      <div className="absolute inset-0 preserve-3d">
        {/* Sample 3D Cube */}
        <div 
          className="absolute w-16 h-16 bg-gradient-to-br from-metro-blue-500 to-metro-blue-600 shadow-3d animate-float preserve-3d"
          style={{
            left: '20%',
            top: '30%',
            transform: 'rotateX(15deg) rotateY(25deg) translateZ(20px)',
            animationDelay: '0s'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-metro-blue-400 to-metro-blue-500 opacity-80 transform rotateY(90deg) translateZ(32px)"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-metro-blue-600 to-metro-blue-700 opacity-60 transform rotateX(90deg) translateZ(32px)"></div>
        </div>

        {/* Sample 3D Sphere */}
        <div 
          className="absolute w-20 h-20 bg-gradient-to-br from-metro-green-500 to-metro-green-600 rounded-full shadow-3d animate-float"
          style={{
            left: '60%',
            top: '20%',
            transform: 'rotateX(10deg) rotateY(-15deg) translateZ(30px)',
            animationDelay: '1s'
          }}
        >
          <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
        </div>

        {/* Sample 3D Cylinder (Train Car) */}
        <div 
          className="absolute w-24 h-8 bg-gradient-to-r from-metro-purple-500 to-metro-purple-600 rounded-full shadow-3d animate-float"
          style={{
            left: '40%',
            top: '60%',
            transform: 'rotateX(5deg) rotateY(10deg) translateZ(15px)',
            animationDelay: '2s'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-metro-purple-400/50 to-metro-purple-500/50 rounded-full transform translateY(-2px)"></div>
        </div>
      </div>

      {/* 3D Space Info */}
      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-metro-green-400 rounded-full animate-pulse"></div>
          <span>3D Space Ready</span>
        </div>
        <div className="text-gray-300 mt-1">CSS 3D Fallback Mode</div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl overflow-hidden shadow-3d border border-white/10">
      <div 
        ref={mountRef} 
        className="w-full"
        style={{ width, height }}
      >
        {isLoading && (
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-10">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-metro-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <div className="text-white font-medium">Loading 3D Space...</div>
            </div>
          </div>
        )}
        
        {error && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="bg-red-500/20 border border-red-500/50 text-red-100 p-4 rounded-lg">
              <div className="font-medium">3D Error:</div>
              <div className="text-sm">{error}</div>
            </div>
          </div>
        )}

        {!window.THREE && !isLoading && <CSS3DFallback />}
      </div>

      {/* Controls Panel */}
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-metro-blue-400 rounded-full animate-pulse"></div>
          <span>3D Scene Active</span>
        </div>
        <div className="text-gray-300">
          {window.THREE ? 'WebGL Mode' : 'CSS 3D Mode'}
        </div>
        <div className="text-gray-400 text-xs">
          Mouse: Rotate • Wheel: Zoom
        </div>
      </div>

      {children}
    </div>
  );
};

export default ThreeScene;
