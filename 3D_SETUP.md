# 3D Space Setup Guide

## Overview
The 3D Space component provides a ready-to-use environment for adding 3D models to your Operations Command Center. It supports both WebGL (Three.js) and CSS 3D fallback modes.

## Installation Options

### Option 1: Three.js via CDN (Recommended for quick setup)
Add these script tags to your `index.html` file:

```html
<!-- Three.js Core -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

<!-- Three.js Controls (Optional but recommended) -->
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>

<!-- Three.js Loaders for different model formats -->
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/OBJLoader.js"></script>
```

### Option 2: NPM Installation
```bash
npm install three
npm install @types/three  # If using TypeScript
```

Then import in your component:
```javascript
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
```

## Features

### Current Features
- ✅ 3D Scene with WebGL rendering
- ✅ CSS 3D fallback mode
- ✅ Interactive camera controls (orbit, zoom, pan)
- ✅ Grid and axes helpers
- ✅ Dynamic lighting system
- ✅ Sample 3D objects (cube, sphere, cylinder)
- ✅ Model library interface
- ✅ Scene configuration controls
- ✅ Responsive design

### Ready for Implementation
- 🔄 3D model loading (.glb, .gltf, .obj)
- 🔄 Model animation system
- 🔄 Interactive model manipulation
- 🔄 Lighting controls
- 🔄 Material editor
- 🔄 Scene export/import

## Usage

### Basic Usage
```jsx
import ThreeScene from '../components/ThreeScene';

<ThreeScene
  width="100%"
  height="500px"
  showGrid={true}
  showAxes={false}
  cameraPosition={{ x: 5, y: 5, z: 5 }}
/>
```

### Adding Custom 3D Models
1. **Prepare your models**: Export as .glb, .gltf, or .obj format
2. **Place models**: Add to `/public/models/` directory
3. **Load models**: Use the model library interface or programmatically load

### Example Model Loading
```javascript
// In ThreeScene component, add this to load a custom model:
const loader = new THREE.GLTFLoader();
loader.load('/models/train.glb', (gltf) => {
  const model = gltf.scene;
  model.position.set(0, 0, 0);
  model.scale.set(1, 1, 1);
  scene.add(model);
});
```

## Supported Model Formats

### Recommended: GLTF/GLB
- ✅ Best performance
- ✅ Supports animations
- ✅ Supports materials and textures
- ✅ Industry standard

### Supported: OBJ
- ✅ Widely supported
- ⚠️ No animation support
- ⚠️ Requires separate material files (.mtl)

### Future Support
- 🔄 FBX format
- 🔄 Collada (.dae)
- 🔄 STL format

## Performance Tips

1. **Optimize Models**: Keep polygon count reasonable (< 50k triangles)
2. **Texture Compression**: Use compressed textures when possible
3. **LOD System**: Implement Level of Detail for complex scenes
4. **Culling**: Enable frustum culling for better performance
5. **Lighting**: Limit number of dynamic lights

## File Structure
```
src/
├── components/
│   └── ThreeScene.jsx          # Main 3D scene component
├── pages/
│   └── ThreeDSpace.jsx         # 3D Space page with controls
└── models/                     # (Create this folder)
    ├── trains/
    ├── infrastructure/
    └── environment/
```

## Browser Compatibility
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ⚠️ IE 11 (CSS 3D fallback only)

## Troubleshooting

### Three.js Not Loading
- Check browser console for errors
- Verify CDN links are accessible
- Ensure scripts load before React app

### Performance Issues
- Reduce model complexity
- Check texture sizes
- Monitor frame rate in dev tools

### Model Not Displaying
- Check file paths
- Verify model format compatibility
- Check browser console for loading errors

## Next Steps

1. **Add Three.js**: Choose installation method and add to project
2. **Test Scene**: Navigate to 3D Space page and verify functionality
3. **Add Models**: Start with simple models to test loading
4. **Customize**: Modify scene settings and add your specific models
5. **Optimize**: Fine-tune performance for your use case

## Support

For issues or questions:
1. Check browser console for errors
2. Verify Three.js installation
3. Test with sample models first
4. Check model file formats and sizes
