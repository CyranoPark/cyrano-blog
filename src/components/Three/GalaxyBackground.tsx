import React from 'react';
import { useTheme } from 'styled-components';
import useThree from '../../hooks/useThree';
import { ICameraOption, ICameraPosition } from '../../types/three';
import StarsModel from '../../models/StarsModel';

const cameraOption: ICameraOption = {
    fov: 75,
    near: 2,
    far: 2000,
};
const cameraPosition: ICameraPosition = {
    x: 0,
    y: 0,
    z: 3,
};

function GalaxyBackground() {
    const theme = useTheme();
    const { ref } = useThree({
        color: theme.color.space,
        cameraOption,
        cameraPosition,
        models: [new StarsModel(5, 10000).particles],
        animate: (renderer, scene, camera) => {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();

            camera.position.z += 0.5;
            camera.lookAt(scene.position);

            if (camera.position.z > 1000) {
                camera.position.z = cameraPosition.z;
                camera.lookAt(scene.position);
            }
        },
    });

    return <div ref={ref} />;
}

export default GalaxyBackground;
