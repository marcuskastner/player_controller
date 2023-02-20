import { OrbitControls } from "@react-three/drei";
import Woman from "./Woman";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

const Experience = () => {
  const { rotationAngle } = useCharacterAnimations();

  const meshRef = useRef();

  useLayoutEffect(() => {
    gsap.to(meshRef.current.rotation, { y: rotationAngle });
  }, [rotationAngle]);

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={1024}
      />
      {/* Floor */}
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
      <group ref={meshRef} position={[0, -1, 0]}>
        <Woman />
      </group>
    </>
  );
};

export default Experience;
