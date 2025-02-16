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
// 'use client'
// import { useEffect,useRef } from 'react';
// import { Canvas, useLoader, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// function Model() {
//   const result = useLoader(GLTFLoader, '/pony_cartoon/scene.gltf');
//   const modelRef = useRef();

//   useEffect(() => {
//     if (modelRef.current) {
//       modelRef.current.rotation.set(Math.PI / 2, 0, 0); // Rotate model manually
//     }
//   }, []);

//   // If you want **continuous rotation**, use `useFrame`
//   useFrame(() => {
//     if (modelRef.current) {
//       modelRef.current.rotation.y += 0.01; // Rotate slowly on Y-axis
//     }
//   });

//   return <primitive ref={modelRef} object={result.scene} scale={[1.5, 1.5, 1.5]} />;
// }

// export default function Home() {
//   return (
//     <div className="bg-white w-full h-lvh">
//       <Canvas>
//         <ambientLight intensity={10} />
//         <spotLight position={[10, 10, 10]} angle={0.3} intensity={2} />
//         <Model />
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }
import ThreeDmodel from "./components/ThreeDmodel";
import Navbar from './components/Navbar'
export default function Home() {
  return (
    <>
      <Navbar />
    <div className="w-full h-screen flex bg-white text-black">
      <div className="w-full md:w-[50%] flex items-center justify-center flex-col p-8 ">
        <div className="w-full md:w-[90%] h-auto  p-6">
          <h1 className="text-4xl font-bold ">Hi, I’m Mantu Kumar</h1>
          <p className="text-sm  mt-2">This is a 3D model created using React Three Fiber.</p>
          <p className="mt-4 text-base ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sunt ipsum, debitis numquam nulla
            adipisci error minus quia voluptatibus placeat voluptates necessitatibus tempora autem quisquam sit
            molestias ipsam neque reprehenderit veniam. Cupiditate rem recusandae, illo veritatis ducimus quisquam
            sed quidem, commodi autem dicta neque, vitae molestiae quod suscipit doloremque porro.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-green-500  rounded-lg hover:bg-green-600">Learn More</button>
            <button className="px-6 py-3 bg-green-500  border-2 border-white  rounded-lg  hover:text-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[50%] flex items-center justify-center">
        <ThreeDmodel /> {/* Replace with your own 3D model */}
      </div>
    </div>
    </>
  );
}

