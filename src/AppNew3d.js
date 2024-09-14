import { useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import {
  useGLTF,
  Sphere,
  CubeCamera,
  Environment,
  OrbitControls,
  // HemisphereLight,
  SoftShadows,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from '@react-three/drei';

import { EffectComposer, Glitch } from '@react-three/postprocessing';
import { RGBELoader } from 'three-stdlib';
import { useControls } from 'leva';
import { publicUrl } from 'global';

function ReflectiveSphere(props) {
  const meshRef = useRef();
  const { scene } = useGLTF(publicUrl + '3dmodel/smoothSphere.glb');
  const envTexture = useLoader(RGBELoader, publicUrl + 'scene/lightStudio.hdr');
  
  const sphereProps = {
    roughness: 0.2,
    metalness: 0.9,
    envMapIntensity: 1,
    color: 'skyblue',
  };

  return (
    <CubeCamera resolution={256} frames={1} envMap={envTexture}>
      {(envMap) => (
        <mesh ref={meshRef} {...props} geometry={scene.children[0].geometry}>
          <MeshDistortMaterial envMap={envMap} {...sphereProps} />
        </mesh>
      )}
    </CubeCamera>
  );
}

export default function App({ isInteractive = true }) {
  
  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 5], fov: 55 }}
      gl={{ alpha: false, antialias: true }}
      style={{ backgroundColor: 'lightslategrey' }}
    >
      <ambientLight intensity={0.3} />
      <hemisphereLight skyColor={"deepskyblue"} groundColor={"gray"} intensity={0.5} position={[0, 50, 0]} />
      <directionalLight 
        castShadow
        intensity={0.8}
        position={[0, 10, 5]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <ReflectiveSphere position={[0, 1, 0]} scale={2} />
      <SoftShadows resolution={1024} penumbra={1} opacity={0.5} />
      <Environment background={false} files={publicUrl + 'scene/studioLarge.hdr'} />
      <OrbitControls
        autoRotate={isInteractive}
        autoRotateSpeed={2}
        enableZoom={true}
        enabled={isInteractive}
      />
      <EffectComposer>
        <Glitch delay={[500, 1500]} duration={[500, 1000]} strength={[0.3, 1]} />
      </EffectComposer>
    </Canvas>
  );
}
