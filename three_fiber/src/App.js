import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import "./style.css";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import { Ground } from './Ground';
import { useFrame } from '@react-three/fiber';

function CarShow(){
  const spotlightref1 = React.useRef();
  const spotlightref2 = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime(); // Get the elapsed time

    // Calculate the position of the spotlights in a circular motion
    spotlightref1.current.position.x = Math.cos(t) * 1 - 1;
    spotlightref1.current.position.z = Math.sin(t) * 1 - 1;
    spotlightref2.current.position.x = -Math.cos(t) * 1 + 0;
    spotlightref2.current.position.z = -Math.sin(t) * 1 + 0;
    // spotLight1Z = Math.sin(t) * 1;

  });

  return(
    <>
      <OrbitControls target={[0,0.35,0]} maxPolarAngle={1.45}/>
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]}/>

      {/* init color */}
        <color args={[0,0,0]} attach={"background"}/>

      {/* init spotcolor */}
      <spotLight ref={spotlightref1} 
        color={[1,0.25,0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[0 ,5,0]}
        castShadow
        shadowBias={-0.0001}
      />

      <spotLight ref={spotlightref2} 
        color={[0.14,0.5,1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5,5,0]}
        castShadow
        shadowBias={-0.0001}
      />

      {/* New spotlights */}
      {/* <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        castShadow
        shadowBias={-0.0001}
        position={[5,5,0]} // Store a reference to the spotlight
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        castShadow
        shadowBias={-0.0001}
        position={[5,5,0]}
      /> */}

      <Ground/>
    </>
  )
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;