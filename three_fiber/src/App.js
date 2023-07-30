import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Plane } from "@react-three/drei";
import "./style.css";

function CarShow(){
  return(
    <>
      <OrbitControls target={[0,0.35,0]} maxPolarAngle={1.45}/>
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]}/>


      <Plane args={[10, 10]}>
        <meshBasicMaterial color="white" />
      </Plane>
    </>
  )
}

function App() {
  return (
    <Suspense fallback={null}>
      <div className='title'>
        <h1>HelloWorld!</h1>
      </div>
      <Canvas style={{ background: "black" }} shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;