import { motion } from "framer-motion-3d";
import { useGLTF } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import { useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export function Cube() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 5, 50], fov: 90 }}>
      <Lights />
      <Geometry />
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
  const controls = useAnimationControls();

  async function sequence() {
    await controls.start({
      rotateY: [0, 6.3],

      transition: {
        duration: 8,
        ease: "linear",
      },
    });
    await controls.start({
      rotateX: [0, -6.3],
      // rotateZ: [0, -0.1, 0],
      // y: [40, 0, 40],
      // z: [-100, -120, -100],
      transition: {
        duration: 8,
        ease: "linear",
      },
    });
    sequence();
  }
  useEffect(() => {
    sequence();
  }, []);
  return (
    <>
      <motion.group position={[0, 5, -100]} scale={156.6} animate={controls}>
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
      </motion.group>
    </>
  );
}
