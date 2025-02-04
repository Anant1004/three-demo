// 'use client'
// import { Canvas,useFrame, useLoader } from '@react-three/fiber';
// import { useRef } from 'react';
// import { OrbitControls } from '@react-three/drei';
// import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
// function AnimateBox() {
//   const boxref = useRef();
//   useFrame(() => {
//     boxref.current.rotation.x += 0.01;
//     boxref.current.rotation.y += 0.01;
//     boxref.current.rotation.z += 0.01;
//   });
//   return (
//     <mesh ref={boxref}>
//       <boxGeometry args={[1, 1, 1, 10, 10, 10]} />
//       <meshBasicMaterial wireframe={true} color='green' />
//     </mesh>
//   );
// }
// function Model() {
//   const result = useLoader(GLTFLoader, '/pony_cartoon/scene.gltf');
//   return (
//     <primitive object={result.scene} scale={[1.5,1.5,1.5]} rotation={[Math.PI / 2, 0, 0]} />
//   );
// }
// export default function Home() {
//   return (
//     <div className="bg-white w-full h-lvh">
//       <Canvas>
//         <ambientLight intensity={10} />
//         {/* <AnimateBox /> */}
//         <Model />
//         <OrbitControls />
//         <spotLight position={[10, 10, 10]} angle={0.3} />
//       </Canvas>
//     </div>
//   );
// }


// model goes here
'use client'
import { useEffect,useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Model() {
  const result = useLoader(GLTFLoader, '/pony_cartoon/scene.gltf');
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.set(Math.PI / 2, 0, 0); // Rotate model manually
    }
  }, []);

  // If you want **continuous rotation**, use `useFrame`
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Rotate slowly on Y-axis
    }
  });

  return <primitive ref={modelRef} object={result.scene} scale={[1.5, 1.5, 1.5]}  />;
}

export default function ThreeDmodel() {
  return (
    <div className="w-full h-lvh">
      <Canvas>
        <ambientLight intensity={10} />
        <spotLight position={[10, 10, 10]} angle={0.3} intensity={2} />
        <Model />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
