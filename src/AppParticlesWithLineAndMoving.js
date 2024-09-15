import React, { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

const createPoints = (count) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    points[i * 3] = (Math.random() - 0.5) * 10;
    points[i * 3 + 1] = (Math.random() - 0.5) * 10;
    points[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  return points;
};

const createVelocities = (count) => {
  const velocities = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    velocities[i * 3] = (Math.random() - 0.5) * 0.02;
    velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
  }
  return velocities;
};

const createLines = (points, distance) => {
  const lines = [];
  const positions = points.array;
  const count = positions.length / 3;

  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      const dx = positions[i * 3] - positions[j * 3];
      const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
      const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (dist < distance) {
        lines.push(
          positions[i * 3],
          positions[i * 3 + 1],
          positions[i * 3 + 2]
        );
        lines.push(
          positions[j * 3],
          positions[j * 3 + 1],
          positions[j * 3 + 2]
        );
      }
    }
  }
  return new Float32Array(lines);
};

const ParticlesWithLines = ({ count = 500, distance = 2 }) => {
  const pointsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = createPoints(count);
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    return geometry;
  }, [count]);

  const velocities = useMemo(() => createVelocities(count), [count]);

  const linesGeometry = useMemo(() => {
    const points = pointsGeometry.attributes.position;
    const lines = createLines(points, distance);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(lines, 3));
    return geometry;
  }, [pointsGeometry]);

  const pointsMaterial = useRef();
  const linesMaterial = useRef();

  // Helper function to update lines geometry
  const updateLinesGeometry = useCallback(() => {
    const points = pointsGeometry.attributes.position;
    const lines = createLines(points, distance);
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(lines, 3));
  }, [pointsGeometry, linesGeometry, distance]);

  useFrame(() => {
    const positions = pointsGeometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      positions[i] += velocities[i];
      positions[i + 1] += velocities[i + 1];
      positions[i + 2] += velocities[i + 2];

      // Keep particles within bounds for a nice effect
      if (positions[i] > 5 || positions[i] < -5) velocities[i] = -velocities[i];
      if (positions[i + 1] > 5 || positions[i + 1] < -5)
        velocities[i + 1] = -velocities[i + 1];
      if (positions[i + 2] > 5 || positions[i + 2] < -5)
        velocities[i + 2] = -velocities[i + 2];
    }
    pointsGeometry.attributes.position.needsUpdate = true;

    // Update lines to connect the moving points
    updateLinesGeometry();
  });

  return (
    <>
      <points ref={pointsMaterial} geometry={pointsGeometry}>
        <pointsMaterial attach="material" size={0.09} color="#6666ff" />
      </points>
      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial
          attach="material"
          color="#6666ff"
          opacity={0.2}
          transparent
        />
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 1}
          enableZoom={false}
        />
      </lineSegments>
    </>
  );
};

export default function NebulaComponent() {
  return (
    <div style={{ height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <ParticlesWithLines />
      </Canvas>
    </div>
  );
}
