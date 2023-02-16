import { motion } from "framer-motion-3d";
import { useGLTF } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";

export function Cube() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 50], fov: 55 }}>
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
  const xCord = 0;
  return (
    <>
      <motion.group
        position={[0, 6.3, -100]}
        scale={146.6}
        animate={{
          rotateY: [6.3, 0, 0, 0],
          rotateX: [0, 0, 4.5, 4.5, 0],
          z: [-100, -125, -100],
          x: [xCord, xCord + 6.3, xCord],
          y: [26.3, 5, 6, -25, 6, 26.3],
        }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
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
      </motion.group>
    </>
  );
}
