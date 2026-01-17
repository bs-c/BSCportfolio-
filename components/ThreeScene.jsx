"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { ParametricGeometry } from 'three-stdlib';

// --- 1. 定義參數化曲面的數學函數 ---
const archFunction = (u, v, target) => {
  const span = 30;
  const length = 20;
  const height = 12;

  const x = (u - 0.5) * span;
  const z = (v - 0.5) * length;

  const normalizedX = (u - 0.5) * 2;
  let baseHeight = height * (1 - normalizedX * normalizedX);

  const wave = Math.cos(v * Math.PI * 2) * 0.2 + 0.8;
  const y = baseHeight * wave;
  
  const twistX = x + Math.sin(v * Math.PI) * 2;

  target.set(twistX, y, z);
};

// --- 2. 桿件 (Strut) ---
const Strut = ({ start, end }) => {
  const startVec = new THREE.Vector3(...start);
  const endVec = new THREE.Vector3(...end);
  const direction = new THREE.Vector3().subVectors(endVec, startVec);
  const length = direction.length();
  const midPoint = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);
  const upAxis = new THREE.Vector3(0, 1, 0);
  const quaternion = new THREE.Quaternion().setFromUnitVectors(upAxis, direction.clone().normalize());

  return (
    <mesh position={midPoint} quaternion={quaternion}>
      <cylinderGeometry args={[0.06, 0.06, length, 6]} />
      <meshStandardMaterial
        color="#f1f5f9"
        metalness={0.6}
        roughness={0.2}
      />
    </mesh>
  );
};

// --- 3. 節點 (Node) ---
const Node = ({ position }) => (
  <mesh position={position}>
    <sphereGeometry args={[0.15, 12, 12]} />
    <meshStandardMaterial
      color="#ffffff" 
      metalness={0.7} 
      roughness={0.1}
      emissive="#ffffff"
      emissiveIntensity={0.2}
    />
  </mesh>
);

// --- 4. 生成結構 ---
const ParametricStructure = ({ subdivision = 20 }) => {
  const { nodes, edges } = useMemo(() => {
    const geometry = new ParametricGeometry(archFunction, subdivision, subdivision / 2);
    const vertices = geometry.attributes.position.array;
    const indices = geometry.index.array;
    const nodesData = [];
    const edgesSet = new Set();

    for (let i = 0; i < vertices.length; i += 3) {
      nodesData.push([vertices[i], vertices[i+1], vertices[i+2]]);
    }

    for (let i = 0; i < indices.length; i += 3) {
      const a = indices[i];
      const b = indices[i+1];
      const c = indices[i+2];
      edgesSet.add(`${Math.min(a, b)}-${Math.max(a, b)}`);
      edgesSet.add(`${Math.min(b, c)}-${Math.max(b, c)}`);
      edgesSet.add(`${Math.min(c, a)}-${Math.max(c, a)}`);
    }

    const edgesData = Array.from(edgesSet).map(edgeStr => 
      edgeStr.split('-').map(Number)
    );
    geometry.dispose();
    return { nodes: nodesData, edges: edgesData };
  }, [subdivision]);

  return (
    <group>
      {nodes.map((pos, index) => (
        <Node key={`node-${index}`} position={pos} />
      ))}
      {edges.map(([startIdx, endIdx], index) => (
        <Strut key={`edge-${index}`} start={nodes[startIdx]} end={nodes[endIdx]} />
      ))}
    </group>
  );
};

// --- 5. 主結構 ---
const MainStructure = () => {
  const groupRef = useRef();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -4, 0]}>
      <ParametricStructure subdivision={24} />
    </group>
  )
}

/* --- 最終輸出元件 --- */
export default function ThreeScene() {
  return (
    <div className="w-full h-full bg-slate-100">
      <Canvas gl={{ antialias: true }} dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[15, 5, 15]} fov={70} />
        
        {/* --- 修改後的控制器設定 --- */}
        <OrbitControls 
          enableZoom={true}      // ✅ 開啟縮放
          minDistance={10}       // ✅ 最近距離 (防止穿模)
          maxDistance={50}       // ✅ 最遠距離 (防止迷路)
          enablePan={true}      // 建議關閉平移，保持結構在中心
          maxPolarAngle={Math.PI / 1.8} // 限制視角不能看太低
          minPolarAngle={Math.PI / 4}   // 限制視角不能看太高
          autoRotate={true}
          autoRotateSpeed={0.5}
        />

        {/* 燈光設定 */}
        <ambientLight intensity={1.5} color="#ffffff" />
        <directionalLight 
          position={[10, 15, 10]} 
          intensity={2.5} 
          castShadow 
          color="#ffffff" 
        />
        <directionalLight 
          position={[-10, 5, -5]} 
          intensity={1.0} 
          color="#dbeafe" 
        />
        <spotLight 
          position={[0, 10, -10]} 
          intensity={3} 
          angle={0.5} 
          penumbra={1} 
          color="#ffffff" 
        />

        <MainStructure />
        
        <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={40} blur={2.5} far={4} color="#64748b" />
      </Canvas>
    </div>
  );
}