import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Plane } from "@react-three/drei";
import { ShaderMaterial } from 'three';
import { extend } from '@react-three/fiber';
import "./style.css";

const CosmicBackgroundShader = {
  uniforms: {
    time: { value: 0 },
    resolution: { value: new THREE.Vector2() },
  },
  vertexShader: `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    uniform vec2 resolution;

    void main() {
      vec2 uv = gl_FragCoord.xy / resolution.xy;
      vec3 color = vec3(0.0);

      // Create a cosmic effect using GLSL code
      float intensity = 0.5 + 0.5 * sin(time);
      color += vec3(intensity);

      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

extend({ CosmicBackgroundShader });

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
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" ,color:'black'}}>
        <h1>HelloWorld!</h1>
      </div>
      <Canvas style={{ background: "black" }} shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;