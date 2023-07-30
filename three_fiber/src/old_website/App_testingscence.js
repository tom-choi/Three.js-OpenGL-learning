import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import "./style.css";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import { Ground } from './Ground';
import { useFrame } from '@react-three/fiber';
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

function CarShow(){
  const spotlightref1 = useRef();
  const spotlightref2 = useRef();
  const spotlightref3 = useRef(); // New ref for green spotlight
  const spotlightref4 = useRef(); // New ref for yellow spotlight
  const spotlightref5 = useRef(); // New ref for white spotlight

  // Create four floating panels
  const panel1Ref = useRef();
  const panel2Ref = useRef();
  const panel3Ref = useRef();
  const panel4Ref = useRef();

  const loginplane = useRef();

  // TextureLoader
  const [redIconTexture, blueIconTexture, greenIconTexture, yellowIconTexture] = useLoader(TextureLoader,[
    process.env.PUBLIC_URL + "icon/appstore.png",
    process.env.PUBLIC_URL + "icon/googlestore.png",
    process.env.PUBLIC_URL + "icon/android.png",
    process.env.PUBLIC_URL + "icon/github.png",
]);

  const [ LoginTexture ] = useLoader(TextureLoader,[
    process.env.PUBLIC_URL + "img/登陸.JPG"
  ]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime(); // Get the elapsed time

    // Calculate the position of the spotlights in a circular motion
    spotlightref1.current.position.x = Math.cos(t) * 1 - 1;
    spotlightref1.current.position.z = Math.sin(t) * 1 - 1;
    spotlightref2.current.position.x = -Math.cos(t) * 1 + 0;
    spotlightref2.current.position.z = -Math.sin(t) * 1 + 0;
    spotlightref3.current.position.x = Math.cos(t) * 1 + 1; // Set position for green spotlight
    spotlightref3.current.position.z = Math.sin(t) * 1 + 1;
    spotlightref4.current.position.x = -Math.cos(t) * 1 - 1; // Set position for yellow spotlight
    spotlightref4.current.position.z = -Math.sin(t) * 1 - 1;

    // Calculate the rotation
    // Rotate the panels
    panel1Ref.current.rotation.y += 0.01;
    panel2Ref.current.rotation.y += 0.01;
    panel3Ref.current.rotation.y += 0.01;
    panel4Ref.current.rotation.y += 0.01;
  });

  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <color args={[0, 0, 0]} attach={"background"} />

      <spotLight ref={spotlightref1}
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[0, 5, 0]}
        castShadow
        shadowBias={-0.0001}
      />

      <spotLight ref={spotlightref2}
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadowBias={-0.0001}
      />

      <spotLight ref={spotlightref3} // Add green spotlight
        color={[0, 1, 0]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[0, 5, 0]}
        castShadow
        shadowBias={-0.0001}
      />

      <spotLight ref={spotlightref4} // Add yellow spotlight
        color={[1, 1, 0]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[0, 5, 0]}
        castShadow
        shadowBias={-0.0001}
      />

      <spotLight ref={spotlightref5} // Add white spotlight
        color={[1, 1, 1]}
        intensity={3}
        angle={0.6}
        penumbra={0.5}
        position={[0, 5, 0]}
        castShadow
        shadowBias={-0.0001}
      />

      {/* Add four floating panels */}
      <mesh ref={panel1Ref} position={[-2, 0, 0]} onClick={() => window.location.href = "https://apps.apple.com/us/app/um-all/id1636670554"}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"red"} map={redIconTexture} />
      </mesh>

      <mesh ref={panel2Ref} position={[2, 0, 0]} onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=one.umall"}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"blue"} map={blueIconTexture} />
      </mesh>

      <mesh ref={panel3Ref} position={[0, 0, -2]} onClick={() => window.location.href = "https://umall.one/static/release/app-release.apk"}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"green"} map={greenIconTexture} />
      </mesh>

      <mesh ref={panel4Ref} position={[0, 0, 2]} onClick={() => window.location.href = "https://github.com/UM-ARK/UM-All-Frontend"}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"yellow"} map={yellowIconTexture} />
      </mesh>

      <mesh ref={loginplane} position={[0, 3, 0]} rotation={[0, 0, 0]} receiveShadow={false}>
        <planeGeometry args={[2.449, 3.466]} />
        <meshBasicMaterial color={"gray"} map = {LoginTexture} />
      </mesh>

      <Ground />
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
