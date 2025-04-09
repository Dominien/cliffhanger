import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function MacBookModel(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/macbook_cliffhanger.glb');
  const { actions, names } = useAnimations(animations, group);
  const [animationComplete, setAnimationComplete] = useState(false);
  const startTime = useRef(null);
  const animationDuration = 2; // 2 seconds animation

  // Start any animations if available
  useEffect(() => {
    if (names.length > 0) {
      // If there are animations in the GLTF file
      const action = actions[names[0]];
      if (action) {
        action.reset();
        action.setLoop(THREE.LoopOnce);
        action.clampWhenFinished = true;
        action.play();
      }
    }
  }, [actions, names]);

  // Add single animation for opening/reveal
  useFrame((state) => {
    if (!group.current) return;
    
    if (startTime.current === null) {
      startTime.current = state.clock.elapsedTime;
    }
    
    const elapsed = state.clock.elapsedTime - startTime.current;
    const progress = Math.min(elapsed / animationDuration, 1);
    
    if (progress < 1) {
      // Initial rotation from closed to open
      group.current.rotation.y = THREE.MathUtils.lerp(
        -Math.PI / 4, // Start rotated to show the side
        0,            // End facing forward
        progress
      );
      
      // Initial rise from below
      group.current.position.y = THREE.MathUtils.lerp(
        -2,        // Start below view
        0,        // End at center
        progress
      );
      
      // Scale up
      const scale = THREE.MathUtils.lerp(0.8, 1, progress);
      group.current.scale.set(scale, scale, scale);
    } else if (!animationComplete) {
      setAnimationComplete(true);
    }
  });

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

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} scale={props.scale || 1} />
    </group>
  );
}

export default MacBookModel;