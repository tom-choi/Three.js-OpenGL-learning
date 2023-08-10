import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, DirectionalLight } from "@react-three/drei";
import "./App.css";
import "./index.css";

import { BrowserRouter, NavLink } from 'react-router-dom';
import { Navbar } from './sub_canvas/Navbar';
import { Home } from './sub_canvas/Home';
import { QApages } from './sub_canvas/QApages';
import { UserAgreement } from './sub_canvas/UserAgreement';

import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function CarShow(){
  const gltf = useLoader(GLTFLoader, './models/iphone_11_pro/scene.gltf');

  return(
    <>
      <OrbitControls target={[0,0.35,0]} maxPolarAngle={1.45}/>
      <PerspectiveCamera makeDefault fov={50} position={[8, 2, 10]}/>
      
      <mesh>
        <primitive object={gltf} />
        <spotLight
          color={[1, 1, 1]}
          intensity={1.5}
          angle={0.6}
          penumbra={0.5}
          position={[3, 5, 0]}
          castShadow
          shadowBias={-0.0001}
        />
      </mesh>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Home/>
          <QApages/>
          <UserAgreement/>
        </div>
      </div>
      <Suspense fallback={null}>
        <Canvas style={{ background: "black" }} shadows>
          <CarShow />
        </Canvas>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;