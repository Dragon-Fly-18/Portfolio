import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// 3D Rotating Torus Knot
const TorusKnot = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <torusKnotGeometry args={[2, 0.6, 100, 16]} />
      <meshPhongMaterial
        color="#00d4ff"
        emissive="#0099cc"
        shininess={100}
        wireframe={false}
      />
    </mesh>
  );
};

// Floating Spheres Around Main Object
const FloatingSphere = ({ position, color, delay }: { position: [number, number, number]; color: string; delay: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const time = useRef(0);

  useFrame(() => {
    if (meshRef.current) {
      time.current += 0.003;
      meshRef.current.position.y = position[1] + Math.sin(time.current + delay) * 0.5;
      meshRef.current.position.x = position[0] + Math.cos(time.current + delay) * 0.3;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshPhongMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  );
};

// Particles Background
const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);

  useEffect(() => {
    if (pointsRef.current) {
      const geometry = pointsRef.current.geometry as THREE.BufferGeometry;
      const positions = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += (Math.random() - 0.5) * 0.1;
        positions[i + 1] += (Math.random() - 0.5) * 0.1;
        positions[i + 2] += (Math.random() - 0.5) * 0.1;
      }
      geometry.attributes.position.needsUpdate = true;
    }
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0001;
      pointsRef.current.rotation.y += 0.0002;
    }
  });

  const particlesGeometry = new THREE.BufferGeometry();
  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 50;
    positions[i + 1] = (Math.random() - 0.5) * 50;
    positions[i + 2] = (Math.random() - 0.5) * 50;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  return (
    <points ref={pointsRef} geometry={particlesGeometry}>
      <pointsMaterial size={0.1} color="#00d4ff" sizeAttenuation transparent opacity={0.6} />
    </points>
  );
};

// Main Scene Component
export const Scene = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={75} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff00ff" />
      <pointLight position={[0, 0, 10]} intensity={0.8} color="#00ffff" />

      <ParticleField />
      <TorusKnot />
      <FloatingSphere position={[4, 0, 0]} color="#ff00ff" delay={0} />
      <FloatingSphere position={[-4, 0, 0]} color="#00ff88" delay={Math.PI / 2} />
      <FloatingSphere position={[0, 4, 0]} color="#ff9500" delay={Math.PI} />

      <OrbitControls
        autoRotate
        autoRotateSpeed={2}
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
      />
    </Canvas>
  );
};
