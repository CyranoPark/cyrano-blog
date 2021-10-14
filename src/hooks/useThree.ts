import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import formatThreeColor from '../utils/formatThreeColor';
import ThreeService from '../services/ThreeService';
import { IBackgroundCameraOption } from '../types/three';
import theme from '../context/theme';

interface IUseTreeProps {
    color: string;
    size: 'full' | { width: number; height: number };
    cameraOption: IBackgroundCameraOption;
}

function useThree({ color, size, cameraOption }: IUseTreeProps) {
    const ref = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            cameraOption.fov,
            size === 'full' ? window.innerWidth / window.innerHeight : cameraOption?.aspect || 1,
            cameraOption.near,
            cameraOption.far,
        );

        const renderer = new THREE.WebGLRenderer();

        const renderSize =
            size === 'full' ? [window.innerWidth, window.innerHeight] : [size.width, size.height];
        renderer.setSize(...renderSize);
        renderer.setClearColor(formatThreeColor(color));

        ref.current.appendChild(renderer.domElement);

        camera.position.z = cameraOption.position.z;
        camera.position.y = cameraOption.position.y;
        camera.position.x = cameraOption.position.x;

        const geometry = new THREE.BufferGeometry();
        const sprite = new THREE.TextureLoader().load('/images/star.png');

        geometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(ThreeService.getRandomParticlePosition(10000), 3),
        );

        const material = new THREE.PointsMaterial({
            size: 5,
            sizeAttenuation: true,
            map: sprite,
            alphaTest: 0.5,
            transparent: true,
            color: theme.color.yellow,
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        const render = () => {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();

            camera.position.z += 0.5;
            camera.lookAt(scene.position);

            if (camera.position.z > 1000) {
                camera.position.z = cameraOption.position.z;
                camera.lookAt(scene.position);
            }
        };

        ThreeService.animate(scene, camera, renderer, render);

        function handleResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        let mouseX;
        let mouseY;

        function handlePointerMove(event) {
            if (event.isPrimary === false) return;

            mouseX = event.clientX;
            mouseY = event.clientY;
        }

        document.body.addEventListener('pointermove', handlePointerMove);
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
