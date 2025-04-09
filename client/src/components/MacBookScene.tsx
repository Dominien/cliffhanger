import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, useAnimations } from '@react-three/drei';
import MacBookModel from './MacBookModel';

export default function MacBookScene() {
  return (
    <div className="w-full h-full absolute inset-0" style={{ cursor: 'none' }}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 3], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{ width: '100%', height: '100%' }}
        onCreated={({ gl }) => {
          gl.domElement.style.touchAction = 'none'; // Ensures mouse events work properly on touch devices
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight
            intensity={0.7}
            angle={0.15}
            penumbra={1}
            position={[10, 10, 10]}
            castShadow
          />
          <MacBookModel position={[0, -0.2, 0]} scale={2.2} />
          <Environment preset="city" />
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -1.6, 0]}
            opacity={0.4}
            width={10}
            height={10}
            blur={1.5}
            far={2}
          />
          {/* OrbitControls removed to allow custom mouse tracking */}
        </Suspense>
      </Canvas>
    </div>
  );
}