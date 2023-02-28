
import { useGLTF, OrbitControls } from "@react-three/drei";

import { Canvas, useFrame } from "@react-three/fiber";
import { useAnimationControls } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import * as THREE from "three";
export function Cube() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 5, 50], fov: 90 }}>
      <Lights />
      <Geometry />
      <OrbitControls />
    </Canvas>
  );
}

function Lights() {
  const lights = [[-0, 0, 10, 0.2]];
  return (
    <>
      {lights.map(([x, y, z, intensity], i) => (
        <pointLight
          key={i}
          intensity={intensity}
          position={[x / 8, y / 8, z / 8]}
          color="orange"
        />
      ))}
      <ambientLight intensity={0.1} />
    </>
  );
}

function Geometry() {
  const { nodes, materials } = useGLTF("/cube.glb");
  const [count, setCount] = useState(0);
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += 0.2 * delta;
  });

  return (
    <>
      <group
        position={[0, 5, -100]}
        ref={ref}
        onPointerDown={() => {
          setCount((count + 1) % 3);
        }}
        scale={156.6}
      >
        <mesh
          geometry={nodes.Curve_1.geometry}
          material={materials["SVGMat.007"]}
        />
        <mesh
          geometry={nodes.Curve_2.geometry}
          material={materials["SVGMat.005"]}
        />
        <mesh
          geometry={nodes.Curve_3.geometry}
          material={materials["SVGMat.031"]}
        />
        <mesh
          geometry={nodes.Curve_4.geometry}
          material={materials["SVGMat.019"]}
        />
        <mesh
          geometry={nodes.Curve_5.geometry}
          material={materials["SVGMat.026"]}
        />
        <mesh
          geometry={nodes.Curve_6.geometry}
          material={materials["SVGMat.030"]}
        />
        <mesh
          geometry={nodes.Curve_7.geometry}
          material={materials["SVGMat.020"]}
        />
        <mesh
          geometry={nodes.Curve_8.geometry}
          material={materials["SVGMat.009"]}
        />
        <mesh
          geometry={nodes.Curve_9.geometry}
          material={materials["SVGMat.042"]}
        />
        <mesh
          geometry={nodes.Curve_10.geometry}
          material={materials["SVGMat.043"]}
        />
        <mesh
          geometry={nodes.Curve_11.geometry}
          material={materials["SVGMat.044"]}
        />
        <mesh
          geometry={nodes.Curve_12.geometry}
          material={materials["SVGMat.046"]}
        />
        <mesh
          geometry={nodes.Curve_13.geometry}
          material={materials["SVGMat.027"]}
        />
        <mesh
          geometry={nodes.Curve_14.geometry}
          material={materials["base.003"]}
        />
        <mesh geometry={nodes.Curve_15.geometry} material={materials.edges} />
        <mesh geometry={nodes.Curve_16.geometry} material={materials.corners} />
      </group>
    </>
  );
}
