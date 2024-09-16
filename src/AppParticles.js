import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

const Nebula = () => {
  const meshRef = useRef();
  const materialRef = useRef();
  const [geometry] = React.useState(() => {
    const width = 10;
    const height = 10;
    const count = 3000;

    const geometry = new THREE.BufferGeometry();
    const positions = Float32Array.from(
      { length: count * 3 },
      () => (Math.random() - 0.5) * 2 * Math.max(width, height)
    );
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    return geometry;
  });

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry {...geometry} />
      <pointsMaterial
        ref={materialRef}
        size={0.08}
        color="#007eac"
        transparent
        sizeAttenuation
        opacity={0.6}
      />
    </points>
  );
};

const NebulaComponent = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <Nebula />
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1}
          enableZoom={false}
        />
      </Canvas>
    </div>
  );
};

export default NebulaComponent;
