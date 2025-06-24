import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, PresentationControls, ContactShadows, Environment, Float, useAnimations } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// 3D Boy Model with waving animation
const Boy = ({ isDarkMode }) => {
  const group = useRef();
  const rightArm = useRef();
  const head = useRef();
  
  // Waving animation
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    // Waving arm animation
    if (rightArm.current) {
      rightArm.current.rotation.z = Math.sin(t * 2) * 0.3;
      rightArm.current.rotation.y = Math.sin(t * 2) * 0.1;
    }
    
    // Subtle head movement
    if (head.current) {
      head.current.rotation.y = Math.sin(t * 0.5) * 0.1;
    }
    
    // Subtle body movement
    if (group.current) {
      group.current.position.y = Math.sin(t) * 0.05;
    }
  });

  return (
    <group ref={group} position={[0, -1, 0]}>
      {/* Head */}
      <mesh ref={head} position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color={isDarkMode ? "#8b5cf6" : "#3b82f6"} 
          roughness={0.3} 
          metalness={0.2}
        />
        
        {/* Eyes */}
        <group position={[0, 0, 0.3]}>
          <mesh position={[-0.2, 0.1, 0.2]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
          <mesh position={[0.2, 0.1, 0.2]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
        </group>
        
        {/* Smile */}
        <mesh position={[0, -0.1, 0.4]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.2, 0.05, 16, 16, Math.PI]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
      </mesh>
      
      {/* Body */}
      <mesh position={[0, 0.5, 0]}>
        <capsuleGeometry args={[0.3, 1, 16, 16]} />
        <meshStandardMaterial 
          color={isDarkMode ? "#6366f1" : "#2563eb"} 
          roughness={0.4}
          metalness={0.3}
        />
      </mesh>
      
      {/* Right Arm (Waving) */}
      <group ref={rightArm} position={[0.4, 0.7, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <mesh position={[0.2, 0, 0]}>
          <capsuleGeometry args={[0.1, 0.6, 16, 16]} />
          <meshStandardMaterial 
            color={isDarkMode ? "#6366f1" : "#2563eb"} 
            roughness={0.4}
            metalness={0.3}
          />
        </mesh>
        
        {/* Hand */}
        <mesh position={[0.5, 0, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial 
            color={isDarkMode ? "#f9a8d4" : "#f9a8d4"} 
            roughness={0.4}
            metalness={0.1}
          />
        </mesh>
      </group>
      
      {/* Left Arm */}
      <mesh position={[-0.4, 0.5, 0]} rotation={[0, 0, Math.PI / 6]}>
        <capsuleGeometry args={[0.1, 0.6, 16, 16]} />
        <meshStandardMaterial 
          color={isDarkMode ? "#6366f1" : "#2563eb"} 
          roughness={0.4}
          metalness={0.3}
        />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.15, -0.5, 0]}>
        <capsuleGeometry args={[0.12, 0.8, 16, 16]} />
        <meshStandardMaterial 
          color={isDarkMode ? "#4f46e5" : "#1d4ed8"} 
          roughness={0.4}
          metalness={0.3}
        />
      </mesh>
      <mesh position={[0.15, -0.5, 0]}>
        <capsuleGeometry args={[0.12, 0.8, 16, 16]} />
        <meshStandardMaterial 
          color={isDarkMode ? "#4f46e5" : "#1d4ed8"} 
          roughness={0.4}
          metalness={0.3}
        />
      </mesh>
    </group>
  );
};

// Main component
const DeveloperAvatar = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full h-full"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Float
            speed={1.5}
            rotationIntensity={0.5}
            floatIntensity={0.5}
          >
            <Boy isDarkMode={isDarkMode} />
          </Float>
        </PresentationControls>
        
        <ContactShadows 
          position={[0, -1.5, 0]} 
          opacity={0.4} 
          scale={5} 
          blur={2.5} 
        />
        
        <Environment preset="city" />
      </Canvas>
    </motion.div>
  );
};

export default DeveloperAvatar;