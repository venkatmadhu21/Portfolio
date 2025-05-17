import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, PresentationControls } from '@react-three/drei';
import { gsap } from 'gsap';
import * as THREE from 'three';

// Animated 3D model component
const Model = ({ isDarkMode }) => {
  const modelRef = useRef();
  const groupRef = useRef();
  
  // Rotation animation with boundary check
  useFrame((state) => {
    if (modelRef.current) {
      // Gentle continuous rotation regardless of user interaction
      modelRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      
      // Ensure the model stays within visible bounds
      if (groupRef.current) {
        // Apply gentle spring-like return to center if dragged too far
        const maxDistance = 3;
        const { x, y, z } = groupRef.current.position;
        
        if (Math.abs(x) > maxDistance || Math.abs(y) > maxDistance || Math.abs(z) > maxDistance) {
          groupRef.current.position.x = THREE.MathUtils.lerp(x, 0, 0.05);
          groupRef.current.position.y = THREE.MathUtils.lerp(y, 0, 0.05);
          groupRef.current.position.z = THREE.MathUtils.lerp(z, 0, 0.05);
        }
      }
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
  
  // Create a simple 3D shape since we don't have an actual model
  return (
    <group ref={groupRef} position={[0, 0.5, 0]} scale={0.9}>
      <Float
        speed={1.2} // Animation speed (reduced)
        rotationIntensity={0.3} // XYZ rotation intensity
        floatIntensity={0.5} // Up/down float intensity
        position={[0, 0, 0]}
        floatingRange={[-0.2, 0.2]} // Floating range
      >
        <group ref={modelRef}>
          {/* Create a geometric shape with gradient material */}
          <mesh position={[0, 0, 0]} castShadow receiveShadow>
            <torusKnotGeometry args={[1.2, 0.35, 196, 32]} />
            <meshPhysicalMaterial 
              color={isDarkMode ? "#8b5cf6" : "#0284c7"} 
              metalness={isDarkMode ? 0.8 : 0.9}
              roughness={isDarkMode ? 0.2 : 0.1}
              clearcoat={1}
              clearcoatRoughness={0.2}
              emissive={isDarkMode ? "#8b5cf6" : "#0284c7"}
              emissiveIntensity={isDarkMode ? 0.3 : 0.5}
            />
          </mesh>
          
          {/* Add inner structure */}
          <mesh position={[0, 0, 0]} castShadow>
            <torusKnotGeometry args={[0.8, 0.15, 128, 16]} />
            <meshPhysicalMaterial 
              color={isDarkMode ? "#10b981" : "#059669"} 
              metalness={isDarkMode ? 0.9 : 0.95}
              roughness={0.1}
              clearcoat={1}
              emissive={isDarkMode ? "#10b981" : "#059669"}
              emissiveIntensity={isDarkMode ? 0.4 : 0.6}
              wireframe={true}
            />
          </mesh>
          
          {/* Add some orbiting spheres */}
          {[...Array(7)].map((_, i) => (
            <mesh 
              key={i} 
              position={[
                Math.cos(i * Math.PI * 0.4) * 2.2, 
                Math.sin(i * Math.PI * 0.4) * 0.6, 
                Math.sin(i * Math.PI * 0.4) * 2.2
              ]}
              castShadow
            >
              <sphereGeometry args={[0.15 + (i % 3) * 0.05, 32, 32]} />
              <meshPhysicalMaterial 
                color={i % 3 === 0 
                  ? (isDarkMode ? "#0ea5e9" : "#0284c7") 
                  : i % 3 === 1 
                    ? (isDarkMode ? "#8b5cf6" : "#7c3aed") 
                    : (isDarkMode ? "#10b981" : "#059669")
                } 
                metalness={isDarkMode ? 0.8 : 0.9}
                roughness={isDarkMode ? 0.2 : 0.1}
                emissive={i % 3 === 0 
                  ? (isDarkMode ? "#0ea5e9" : "#0284c7") 
                  : i % 3 === 1 
                    ? (isDarkMode ? "#8b5cf6" : "#7c3aed") 
                    : (isDarkMode ? "#10b981" : "#059669")
                }
                emissiveIntensity={isDarkMode ? 0.6 : 0.8}
                clearcoat={0.5}
              />
            </mesh>
          ))}
          
          {/* Add connecting lines between spheres */}
          {[...Array(6)].map((_, i) => (
            <mesh key={`line-${i}`}>
              <cylinderGeometry args={[0.02, 0.02, 4, 8]} />
              <meshBasicMaterial 
                color={i % 3 === 0 
                  ? (isDarkMode ? "#0ea5e9" : "#0284c7") 
                  : i % 3 === 1 
                    ? (isDarkMode ? "#8b5cf6" : "#7c3aed") 
                    : (isDarkMode ? "#10b981" : "#059669")
                } 
                transparent={true}
                opacity={isDarkMode ? 0.3 : 0.4}
              />
              <group position={[0, 0, 0]} rotation={[Math.PI / 2 * i, Math.PI / 3 * i, 0]} />
            </mesh>
          ))}
        </group>
      </Float>
    </group>
  );
};

// Main hero animation component
const HeroAnimation = ({ isDarkMode }) => {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 50, near: 0.1, far: 1000 }}
        dpr={[1, 2]} // Responsive rendering
        shadows
        style={{ width: '100%', height: '100%', position: 'absolute' }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
      >
        <ambientLight intensity={isDarkMode ? 0.4 : 0.6} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={isDarkMode ? 1.2 : 1.5} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024}
          color={isDarkMode ? "#ffffff" : "#f8fafc"}
        />
        <pointLight 
          position={[-10, -10, -5]} 
          intensity={isDarkMode ? 0.5 : 0.7} 
          color={isDarkMode ? "#8b5cf6" : "#7c3aed"} 
        />
        <pointLight 
          position={[5, -5, 5]} 
          intensity={isDarkMode ? 0.5 : 0.7} 
          color={isDarkMode ? "#0ea5e9" : "#0284c7"} 
        />
        
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 2, Math.PI / 2]}
          azimuth={[-Math.PI / 2, Math.PI / 2]}
          config={{ mass: 1, tension: 170, friction: 26 }}
          snap={false}
          speed={1.5}
        >
          <Suspense fallback={null}>
            <Model isDarkMode={isDarkMode} />
            <Environment preset={isDarkMode ? "night" : "city"} intensity={isDarkMode ? 0.7 : 0.5} />
          </Suspense>
        </PresentationControls>
      </Canvas>
    </div>
  );
};

export default HeroAnimation;