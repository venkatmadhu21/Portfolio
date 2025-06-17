import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import * as THREE from 'three';



const Scene = ({ isDarkMode }) => {
  const particlesRef = useRef();
  const modelRef = useRef();
  const groupRef = useRef();
  
  const particlesCount = 100;
  const particlesPositions = new Float32Array(particlesCount * 3);
  
  // Generate random particles positions
  for (let i = 0; i < particlesCount * 3; i += 3) {
    particlesPositions[i] = (Math.random() - 0.5) * 5;
    particlesPositions[i + 1] = (Math.random() - 0.5) * 5;
    particlesPositions[i + 2] = (Math.random() - 0.5) * 5;
  }
  
  // Rotation animation with boundary check
  useFrame((state) => {
    // Animate particles
    if (particlesRef.current) {
      const time = state.clock.getElapsedTime();
      const positions = particlesRef.current.geometry.attributes.position.array;
      
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + positions[i] * 0.5) * 0.002;
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
    if (modelRef.current) {
      modelRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });
  
  // GSAP animation on mount
  useEffect(() => {
    if (groupRef.current) {
      gsap.from(groupRef.current.position, {
        y: -2,
        duration: 2,
        ease: "elastic.out(1, 0.3)"
      });
      
      gsap.from(groupRef.current.rotation, {
        x: Math.PI * 2,
        duration: 2,
        ease: "power3.out"
      });
    }
  }, []);
  
  return (
    <group ref={groupRef} position={[0, 0.5, 0]} scale={0.9}>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={particlesPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color={isDarkMode ? "#8b5cf6" : "#0284c7"}
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
      <group ref={modelRef}>
        <mesh position={[0, 0, 0]}>
          <torusKnotGeometry args={[1.2, 0.35, 196, 32]} />
          <meshPhysicalMaterial 
            color={isDarkMode ? "#8b5cf6" : "#0284c7"} 
            metalness={isDarkMode ? 0.8 : 0.9}
            roughness={isDarkMode ? 0.2 : 0.1}
            clearcoat={1}
            clearcoatRoughness={0.2}
            emissive={isDarkMode ? "#8b5cf6" : "#0284c7"}
            emissiveIntensity={isDarkMode ? 0.5 : 0.7}
            envMapIntensity={1.5}
          />
        </mesh>
        
        <mesh position={[0, 0, 0]}>
          <torusKnotGeometry args={[0.8, 0.15, 128, 16]} />
          <meshPhysicalMaterial 
            color={isDarkMode ? "#10b981" : "#059669"} 
            metalness={isDarkMode ? 0.9 : 0.95}
            roughness={0.1}
            clearcoat={1}
            emissive={isDarkMode ? "#10b981" : "#059669"}
          />
        </mesh>
      </group>
    </group>
  );
};

// Main hero animation component
const HeroAnimation = ({ isDarkMode }) => {
  return <Scene isDarkMode={isDarkMode} />;
};

export default HeroAnimation;