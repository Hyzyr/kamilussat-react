import { useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import {
  useGLTF,
  Caustics,
  CubeCamera,
  Environment,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshRefractionMaterial,
  MeshTransmissionMaterial,
} from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useControls } from 'leva';
import { RGBELoader } from 'three-stdlib';
import { publicUrl } from 'global';

function Diamond(props) {
  const ref = useRef();
  const { nodes } = useGLTF(publicUrl + '3dmodel/dflat.glb');
  // Use a custom envmap/scene-backdrop for the diamond material
  // This way we can have a clear BG while cube-cam can still film other objects
  const texture = useLoader(RGBELoader, publicUrl + '3dmodel/neon.hdr');
  // Optional config
  // const config = useControls({
  //   bounces: { value: 3, min: 0, max: 8, step: 1 },
  //   aberrationStrength: { value: 0.01, min: 0, max: 0.1, step: 0.01 },
  //   ior: { value: 2.75, min: 0, max: 10 },
  //   fresnel: { value: 1, min: 0, max: 1 },
  //   color: 'white',
  // });
  const config = {
    bounces: 3,
    aberrationStrength: 0,
    ior: 2.75,
    fresnel: 0,
    color: 'white',
  };
  return (
    <CubeCamera resolution={256} frames={1} envMap={texture}>
      {(texture) => (
        <Caustics
          // backfaces
          color={config.color}
          position={[0, -0.5, 0]}
          lightSource={[5, 5, -10]}
          worldRadius={0.1}
          ior={1.8}
          backfaceIor={1.1}
          // intensity={0.1}

        >
          <mesh
            castShadow
            ref={ref}
            geometry={nodes.Diamond_1_0.geometry}
            {...props}>
            <MeshRefractionMaterial
              envMap={texture}
              {...config}
              toneMapped={false}
            />
          </mesh>
        </Caustics>
      )}
    </CubeCamera>
  );
}

export default function App({ isObserved = true }) {
  return (
    <Canvas
      shadows
      camera={{ position: [-4.5, 2, 5], fov: 53 }}
      dpr={window.devicePixelRatio > 1 ? 1.5 : 1}
      // style={{ display: !isObserved ? 'none' : 'block' }}
      // gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
      // style={{ background: 'transparent' }}
      // onCreated={({ gl }) => {
      //   gl.setClearColor(0x000000, 0);  // Transparent background
      //   gl.antialias = true;
      //   gl.shadowMap.enabled = true;
      // }}
    >
      <color attach="background" args={['transparent']} />
      <ambientLight intensity={0.5} />
      {/* <ambientLight intensity={0.5 * Math.PI} /> */}
      <spotLight
        decay={0}
        position={[5, 5, -10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
      />
      <pointLight decay={0} position={[-10, -10, -10]} />
      <>
        <Diamond
          // rotation={[0, 0, 0.715]}
          // scale={1.25}
          // position={[0, -0.09 + 0.5, 0]}
          rotation={[0, 0, 0.2]}
          scale={2.3}
          position={[0, 1, 0]}
        />
        {/* <Caustics
          color="#00425A"
          position={[0.35, -0.55, 0]}
          lightSource={[5, 5, -10]}
          worldRadius={0.01}> */}
          <mesh castShadow position={[-1.75, 0, -1]} scale={0.5}>
            <sphereGeometry args={[1, 64, 64]} />
            <MeshTransmissionMaterial
              resolution={300}
              distortion={0}
              color="#FF8F20"
              roughness={0.15}
              thickness={1}
              anisotropy={1}
            />
          </mesh>
        {/* </Caustics> */}

        {/* <mesh
          castShadow
          // receiveShadow
          position={[1.75, 0, 1]}
          scale={0.5}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial
            color="hotpink"
            attach="material"
            roughness={0.7}
            metalness={0.3}
          />
        </mesh>  */}
      </>
      <AccumulativeShadows
        temporal
        frames={50}
        color="lightblue"
        colorBlend={1}
        toneMapped={false}
        // alphaTest={0.7}
        opacity={0.6}
        // scale={6}
        position={[0, -0.5, 0]}>
        <RandomizedLight
          amount={2}
          radius={6}
          ambient={1}
          position={[5, 5, -10]}
          bias={0}
        />
      </AccumulativeShadows>
      {/* <Environment files={publicUrl + '3dmodel/neon.hdr'} /> */}
      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={1}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        // enabled={isObserved}
      />
      {/* <EffectComposer>
          <Bloom luminanceThreshold={1} intensity={2} levels={9} mipmapBlur />
        </EffectComposer> */}
    </Canvas>
  );
}
