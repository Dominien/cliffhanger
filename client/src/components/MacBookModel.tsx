import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function MacBookModel(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/macbook_cliffhanger.glb');
  const { actions, names } = useAnimations(animations, group);

  // Start any animations if available
  useEffect(() => {
    if (names.length > 0) {
      actions[names[0]]?.play();
    }
  }, [actions, names]);

  // Add gentle floating animation
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
      group.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05;
    }
  });

  // Apply materials or modifications if needed
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