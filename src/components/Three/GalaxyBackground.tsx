import React from 'react';
import { useTheme } from 'styled-components';
import useThree from '../../hooks/useThree';
import { IBackgroundCameraOption } from '../../types/three';

const cameraOption: IBackgroundCameraOption = {
    fov: 75,
    near: 2,
    far: 2000,
    position: {
        x: 0,
        y: 0,
        z: 3,
    },
};

function GalaxyBackground() {
    const theme = useTheme();
    const { ref } = useThree({ color: theme.color.space, cameraOption, size: 'full' });

    return <div ref={ref} />;
}

export default GalaxyBackground;
