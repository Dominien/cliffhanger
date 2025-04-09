import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function MacBookModel(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/macbook_cliffhanger.glb');
  const { actions, names } = useAnimations(animations, group);

  // Debug log to see what animations are available
  useEffect(() => {
    console.log("Available animations:", names);
    console.log("Animation actions:", actions);
  }, [names, actions]);

  // Start animations if available
  useEffect(() => {
    if (names.length > 0) {
      console.log(`Starting animation: ${names[0]}`);
      // Play all available animations to ensure they run
      names.forEach(name => {
        if (actions[name]) {
          actions[name].reset();
          actions[name].setLoop(THREE.LoopOnce);
          actions[name].clampWhenFinished = true;
          actions[name].play();
        }
      });
    } else {
      console.log("No animations found in the model");
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

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} scale={props.scale || 1} />
    </group>
  );
}

export default MacBookModel;