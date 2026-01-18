import { Canvas } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";

function Cube() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#38BDF8" />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Float speed={2} rotationIntensity={1}>
        <Cube />
      </Float>

      <Environment preset="city" />
    </Canvas>
  );
}
