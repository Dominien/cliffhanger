import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export function MacBookModel(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/macbook_cliffhanger.glb');
  const { actions, names } = useAnimations(animations, group);
  const { mouse } = useThree();
  
  const [animationComplete, setAnimationComplete] = useState(false);
  const [targetRotation] = useState(() => new THREE.Euler(0.3, 0, 0));
  
  // Mouse movement tracking with global effect
  useFrame(state => {
    if (!group.current) return;
    
    // Get the current rotation
    const currentRotation = group.current.rotation;
    
    if (animationComplete) {
      // Base forward tilt
      const targetX = targetRotation.x;
      
      // Get normalized mouse position from -1 to 1 across the entire window
      // This ensures the model follows the mouse regardless of where it is on screen
      const mouseX = (state.mouse.x + 1) / 2; // normalize to 0-1
      const mouseY = (state.mouse.y + 1) / 2; // normalize to 0-1
      
      // Calculate influence with greater range for more dramatic effect
      const mouseInfluenceX = THREE.MathUtils.mapLinear(mouseY, 0, 1, -0.2, 0.2);
      const mouseInfluenceY = THREE.MathUtils.mapLinear(mouseX, 0, 1, -0.4, 0.4);
      
      // Smoothly interpolate to the target rotation (lower value = slower, smoother movement)
      currentRotation.x = THREE.MathUtils.lerp(currentRotation.x, targetX + mouseInfluenceX, 0.03);
      currentRotation.y = THREE.MathUtils.lerp(currentRotation.y, mouseInfluenceY, 0.03);
    }
  });

  // Start animations if available
  useEffect(() => {
    if (names.length > 0) {
      console.log(`Starting animation: ${names[0]}`);
      // Play all available animations to ensure they run
      names.forEach(name => {
        if (actions[name]) {
          const action = actions[name];
          action.reset();
          action.setLoop(THREE.LoopOnce);
          action.clampWhenFinished = true;
          
          // Set up a callback for when the animation completes
          action.getMixer().addEventListener('finished', () => {
            console.log('Animation finished, starting tilt');
            setAnimationComplete(true);
          });
          
          action.play();
        }
      });
    } else {
      console.log("No animations found in the model");
      // If no animations, we'll still enable the tilt after a delay
      setTimeout(() => {
        setAnimationComplete(true);
      }, 1000);
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