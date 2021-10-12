import React, { useRef, useState, useEffect, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';

const Box = (props) => {
    const mesh = useRef();

    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [6, 6, 6] : [5, 5, 5]}
            onClick={(e) => setActive(!active)}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color={hovered ? '#2b6c76' : '#720b23'} />
        </mesh>
    );
};

function GalaxyBackground() {
    useEffect(() => {
        // GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;
    }, []);
    return (
        <>
            <Canvas camera={{ position: [0, 0, 35] }}>
                <ambientLight intensity={2} />
                <pointLight position={[40, 40, 40]} />
                <Suspense fallback={null}>
                    <Box position={[10, 0, 0]} />
                    <Box position={[-10, 0, 0]} />
                    <Box position={[0, 10, 0]} />
                    <Box position={[0, -10, 0]} />
                </Suspense>
            </Canvas>
        </>
    );
}

export default GalaxyBackground;
