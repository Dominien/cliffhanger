import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, useAnimations } from '@react-three/drei';
import MacBookModel from './MacBookModel';

export default function MacBookScene() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        shadows
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{ width: '100%', height: '100%' }}
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
          <MacBookModel position={[0, -0.2, 0]} scale={1.2} />
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
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            minPolarAngle={Math.PI / 2 - 0.5}
            maxPolarAngle={Math.PI / 2 + 0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}