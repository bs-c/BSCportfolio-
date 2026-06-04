"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { ParametricGeometry } from "three-stdlib";

// ─── Constants ────────────────────────────────────────────────────────────────
const SUBDIV = 14;
const HEAT_RADIUS = 18;
const COLD = new THREE.Color("#0ea5e9");
const HOT = new THREE.Color("#ef4444");
const HOVER_COL = new THREE.Color("#fbbf24");
const _c = new THREE.Color();
const _hit = new THREE.Vector3();
const _PLANE = new THREE.Plane(new THREE.Vector3(0, 1, 0), -2); // world y=2

function heatCol(dist) {
  const t = Math.max(0, Math.min(1, 1 - dist / HEAT_RADIUS));
  return _c.copy(COLD).lerp(HOT, t * t);
}

// ─── Geometry function ────────────────────────────────────────────────────────
function archFn(u, v, target) {
  const nx = (u - 0.5) * 2;
  target.set(
    (u - 0.5) * 30 + Math.sin(v * Math.PI) * 2,
    12 * (1 - nx * nx) * (Math.cos(v * Math.PI * 2) * 0.2 + 0.8),
    (v - 0.5) * 20
  );
}

// ─── Structure ────────────────────────────────────────────────────────────────
function Structure({ loadRef, hovRef, nodeRefs, strutRefs }) {
  const { nodeArr, nodeVec, strutData } = useMemo(() => {
    const geo = new ParametricGeometry(archFn, SUBDIV, SUBDIV >> 1);
    const pos = geo.attributes.position.array;
    const idx = geo.index.array;

    const nodeArr = [], nodeVec = [];
    for (let i = 0; i < pos.length; i += 3) {
      nodeArr.push([pos[i], pos[i + 1], pos[i + 2]]);
      nodeVec.push(new THREE.Vector3(pos[i], pos[i + 1], pos[i + 2]));
    }

    const edgeSet = new Set();
    for (let i = 0; i < idx.length; i += 3) {
      const [a, b, c] = [idx[i], idx[i + 1], idx[i + 2]];
      edgeSet.add(`${Math.min(a, b)}-${Math.max(a, b)}`);
      edgeSet.add(`${Math.min(b, c)}-${Math.max(b, c)}`);
      edgeSet.add(`${Math.min(a, c)}-${Math.max(a, c)}`);
    }

    const up = new THREE.Vector3(0, 1, 0);
    const strutData = Array.from(edgeSet).map(s => {
      const [a, b] = s.split("-").map(Number);
      const sv = nodeVec[a], ev = nodeVec[b];
      const dir = new THREE.Vector3().subVectors(ev, sv);
      const len = dir.length();
      const midVec = new THREE.Vector3().addVectors(sv, ev).multiplyScalar(0.5);
      const quat = new THREE.Quaternion().setFromUnitVectors(up, dir.normalize());
      return { mid: midVec.toArray(), midVec, quat, len };
    });

    geo.dispose();
    return { nodeArr, nodeVec, strutData };
  }, []);

  useFrame(() => {
    const lp = loadRef.current;
    const hov = hovRef.current;

    nodeVec.forEach((v, i) => {
      const m = nodeRefs.current[i];
      if (!m) return;
      if (i === hov) {
        m.material.color.set(HOVER_COL);
        m.material.emissive.set(HOVER_COL);
        m.material.emissiveIntensity = 0.7;
        m.scale.setScalar(1.6);
      } else {
        heatCol(v.distanceTo(lp));
        m.material.color.copy(_c);
        m.material.emissive.copy(_c).multiplyScalar(0.4);
        m.material.emissiveIntensity = 0.2;
        m.scale.setScalar(1.0);
      }
    });

    strutData.forEach(({ midVec }, i) => {
      const m = strutRefs.current[i];
      if (!m) return;
      heatCol(midVec.distanceTo(lp));
      m.material.color.copy(_c);
      m.material.emissive.copy(_c).multiplyScalar(0.2);
    });
  });

  return (
    <group>
      {nodeArr.map((pos, i) => (
        <mesh
          key={`n${i}`}
          position={pos}
          ref={el => { nodeRefs.current[i] = el; }}
          onPointerEnter={e => { e.stopPropagation(); hovRef.current = i; }}
          onPointerLeave={e => { e.stopPropagation(); hovRef.current = -1; }}
        >
          <sphereGeometry args={[0.15, 8, 8]} />
          <meshStandardMaterial
            color={COLD} metalness={0.7} roughness={0.1}
            emissive={COLD} emissiveIntensity={0.2}
          />
        </mesh>
      ))}
      {strutData.map(({ mid, quat, len }, i) => (
        <mesh
          key={`s${i}`}
          position={mid}
          quaternion={quat}
          ref={el => { strutRefs.current[i] = el; }}
        >
          <cylinderGeometry args={[0.05, 0.05, len, 5]} />
          <meshStandardMaterial
            color={COLD} metalness={0.6} roughness={0.2}
            emissive={COLD} emissiveIntensity={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

// ─── MainStructure ────────────────────────────────────────────────────────────
function MainStructure() {
  const groupRef  = useRef();
  const loadRef   = useRef(new THREE.Vector3(999, 999, 999));
  const hovRef    = useRef(-1);
  const nodeRefs  = useRef([]);
  const strutRefs = useRef([]);

  useFrame(({ raycaster, pointer, camera }, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.05;

    raycaster.setFromCamera(pointer, camera);
    if (raycaster.ray.intersectPlane(_PLANE, _hit)) {
      groupRef.current.worldToLocal(_hit);
      loadRef.current.copy(_hit);
    }
  });

  return (
    <group ref={groupRef} position={[0, -4, 0]}>
      <Structure
        loadRef={loadRef}
        hovRef={hovRef}
        nodeRefs={nodeRefs}
        strutRefs={strutRefs}
      />
    </group>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────
export default function ThreeScene() {
  return (
    <div className="w-full h-full relative">
      <div className="absolute bottom-4 left-4 z-10 font-mono text-[10px] text-slate-600 pointer-events-none select-none">
        HOVER: force flow &nbsp;·&nbsp; DRAG: rotate
      </div>

      <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[15, 5, 15]} fov={70} />
        <OrbitControls
          enableZoom={true}
          minDistance={10}
          maxDistance={50}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 4}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />

        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 15, 10]} intensity={2.5} castShadow />
        <directionalLight position={[-10, 5, -5]} intensity={1.0} color="#dbeafe" />
        <spotLight position={[0, 10, -10]} intensity={3} angle={0.5} penumbra={1} />

        <MainStructure />
        <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={40} blur={2.5} far={4} color="#64748b" />
      </Canvas>
    </div>
  );
}
