import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import Name from './components/Name/Name';
import useScreenDimensions from './hooks/useScreenDimensions';

const App = () => {
    const screen = useScreenDimensions();
    //console.log('%cChris Caruth', 'background: white; color: purple; font-size: 18px');

    const Box = (props: any) => {
        // This reference will give us direct access to the mesh
        const mesh = useRef(null)
        
        // Set up state for the hovered and active state
        const [hovered, setHover] = useState(false)
        const [active, setActive] = useState(false)
        // Rotate mesh every frame, this is outside of React without overhead
        useFrame(() => {
            if (mesh != null && mesh.current != null) {
                //mesh.current.rotation.x = mesh.current.rotation.y += 0.01
            }
        })
        return (
          <mesh
            {...props}
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(e) => setActive(!active)}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
          </mesh>
        )
      }

    return (
        <div style={{ height: '4000px'}}>
            {screen.width != undefined &&
                <div style={{ position: 'fixed', width: '100%', top: '50%', transform: 'translate(0, -60%)' }}>
                    <Name first="Chris" last="Caruth" allowEdit={true} width={screen.width} />
                </div>
            }
            {/* <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
            </Canvas> */}
        </div>
        
    );
}

export default App;
