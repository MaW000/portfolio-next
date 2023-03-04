import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function Cube() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0.6], fov: 90 }}>
      <Geometry />

      <ambientLight intensity={0.2} />
      <OrbitControls  />
    </Canvas>
  );
}

function Geometry() {
  const { nodes, materials } = useGLTF("/cube.glb");
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.x += 0.1 * delta;
    ref.current.rotation.y += 0.1 * delta;
  });
  return (
    <group ref={ref} scale={1.2}>
      <mesh
        geometry={nodes.Curve013.geometry}
        material={materials["SVGMat.001"]}
      />
      <mesh
        geometry={nodes.Curve013_1.geometry}
        material={materials.Material}
      />
      <mesh
        geometry={nodes.Curve013_2.geometry}
        material={materials["Material.001"]}
      />
      <mesh geometry={nodes.Curve013_3.geometry} material={materials.SVGMat} />
      <mesh
        geometry={nodes.Curve013_4.geometry}
        material={materials["SVGMat.011"]}
      />
      <mesh
        geometry={nodes.Curve013_5.geometry}
        material={materials["SVGMat.012"]}
      />
      <mesh
        geometry={nodes.Curve013_6.geometry}
        material={materials["SVGMat.013"]}
      />
      <mesh
        geometry={nodes.Curve013_7.geometry}
        material={materials["SVGMat.015"]}
      />
      <mesh
        geometry={nodes.Curve013_8.geometry}
        material={materials["SVGMat.014"]}
      />
      <mesh
        geometry={nodes.Curve013_9.geometry}
        material={materials["SVGMat.016"]}
      />
      <mesh
        geometry={nodes.Curve013_10.geometry}
        material={materials["SVGMat.017"]}
      />
      <mesh
        geometry={nodes.Curve013_11.geometry}
        material={materials["SVGMat.027"]}
      />
      <mesh
        geometry={nodes.Curve013_12.geometry}
        material={materials["SVGMat.032"]}
      />
      <mesh
        geometry={nodes.Curve013_13.geometry}
        material={materials["SVGMat.029"]}
      />
      <mesh
        geometry={nodes.Curve013_14.geometry}
        material={materials["SVGMat.030"]}
      />
      <mesh
        geometry={nodes.Curve013_15.geometry}
        material={materials["SVGMat.031"]}
      />
      <mesh
        geometry={nodes.Curve013_16.geometry}
        material={materials["SVGMat.028"]}
      />
      <mesh
        geometry={nodes.Curve013_17.geometry}
        material={materials["SVGMat.040"]}
      />
      <mesh
        geometry={nodes.Curve013_18.geometry}
        material={materials["SVGMat.039"]}
      />
      <mesh
        geometry={nodes.Curve013_19.geometry}
        material={materials["SVGMat.042"]}
      />
      <mesh
        geometry={nodes.Curve013_20.geometry}
        material={materials["SVGMat.041"]}
      />
      <mesh
        geometry={nodes.Curve013_21.geometry}
        material={materials["SVGMat.044"]}
      />
    </group>
  );
}
