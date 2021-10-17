import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import ThreeService from '../services/ThreeService';
import { ICameraOption, ICameraPosition } from '../types/three';

interface IUseTreeProps {
    color: string;
    size?: number[];
    cameraOption: ICameraOption;
    cameraPosition: ICameraPosition;
    models?: any[];
    animate: (renderer: any, scene: any, camera: any) => void;
}

function useThree({
    color,
    size,
    cameraOption,
    cameraPosition,
    animate,
    models = [],
}: IUseTreeProps) {
    const ref = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const renderer = ThreeService.getRenderer(size, color);
        const camera = ThreeService.initCamera(cameraOption, cameraPosition);

        ref.current.appendChild(renderer.domElement);

        models.forEach((model) => {
            scene.add(model);
        });

        ThreeService.animate(renderer, scene, camera, () => {
            animate(renderer, scene, camera);
        });

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            ref?.current?.removeChild(ref.current.firstChild);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        ref,
    };
}

export default useThree;
