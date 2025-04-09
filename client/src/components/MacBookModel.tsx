import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations, useAspect } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export function MacBookModel(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/macbook_cliffhanger.glb');
  const { actions, names } = useAnimations(animations, group);
  const { viewport } = useThree();
  
  const [modelScale, setModelScale] = useState(1);
  
  // Calculate responsive scale based on viewport
  useEffect(() => {
    const calculateScale = () => {
      // Base scale on viewport width for responsiveness
      const baseScale = viewport.width / 5;
      // Limit the scale to a reasonable range
      const scale = Math.max(0.8, Math.min(baseScale, 1.5));
      setModelScale(scale);
    };
    
    calculateScale();
    
    // Update scale when viewport changes
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, [viewport]);

  // Start animations if available
  useEffect(() => {
    if (names.length > 0) {
      // Play all available animations to ensure they run
      names.forEach(name => {
        if (actions[name]) {
          actions[name].reset();
          actions[name].setLoop(THREE.LoopOnce);
          actions[name].clampWhenFinished = true;
          actions[name].play();
        }
      });
    }
  }, [actions, names]);

  // Apply materials or modifications
  useEffect(() => {
    scene.traverse((node) => {
      if (node.isMesh) {
        // Enable shadows
        node.castShadow = true;
        node.receiveShadow = true;
        
        // Apply better materials if needed
        if (node.material) {
          // For screen material to make it glow
          if (node.name.includes('screen') || node.name.includes('display')) {
            node.material.emissive = new THREE.Color(0xffffff);
            node.material.emissiveIntensity = 0.5;
          }
        }
      }
    });
  }, [scene]);

  // Use the calculated modelScale or the explicitly provided scale
  const finalScale = props.scale === "auto" ? modelScale : props.scale || 1;

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} scale={finalScale} />
    </group>
  );
}

export default MacBookModel;