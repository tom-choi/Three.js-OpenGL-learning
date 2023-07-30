import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Plane } from "@react-three/drei";
import "./App.css";

import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

function Title(){
  return (
    <>
      <div className="relative z-0">
        <h1>HelloWorld!</h1>
      </div>
    </>
  );
}

function Iphone(){
  const fbx = useLoader(FBXLoader, './model/Iphone seceond version finished.fbx');
  return(
    <>
      <mesh>
        <primitive object={fbx} />
      </mesh>
    </>
  )
}

function CarShow(){
  return(
    <>
      <OrbitControls target={[0,0.35,0]} maxPolarAngle={1.45}/>
      <PerspectiveCamera makeDefault fov={50} position={[8, 2, 10]}/>


      <Plane args={[10, 10]}>
        <meshBasicMaterial color="white" />
      </Plane>
    </>
  )
}

function App() {
  return (
    <Suspense fallback={null}>
      <Title />
      <Canvas style={{ background: "black" }} shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;