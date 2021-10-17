import * as THREE from 'three';
import { ICameraOption, ICameraPosition } from '../types/three';
import formatThreeColor from '../utils/formatThreeColor';

class ThreeService {
    animate = (renderer: any, scene: any, camera: any, callback: () => void) => {
        requestAnimationFrame(this.animate.bind(this, renderer, scene, camera, callback));
        callback();
        renderer.render(scene, camera);
    };

    getRandomParticlePosition = (particleCount: number): number[] => {
        const vertices = [];

        for (let i = 0; i < particleCount; i++) {
            const x = 2000 * Math.random() - 1000;
            const y = 2000 * Math.random() - 1000;
            const z = 2000 * Math.random() - 1000;

            vertices.push(x, y, z);
        }
        return vertices;
    };

    initCamera = (cameraOption: ICameraOption, cameraPosition: ICameraPosition) => {
        const camera = new THREE.PerspectiveCamera(
            cameraOption.fov,
            cameraOption?.aspect || window.innerWidth / window.innerHeight,
            cameraOption.near,
            cameraOption.far,
        );

        camera.position.z = cameraPosition.z;
        camera.position.y = cameraPosition.y;
        camera.position.x = cameraPosition.x;

        return camera;
    };

    getRenderer = (size?: number[], color?: string): any => {
        const renderer = new THREE.WebGLRenderer();
        const renderSize = size || [window.innerWidth, window.innerHeight];

        renderer.setSize(...renderSize);
        if (color) {
            renderer.setClearColor(formatThreeColor(color));
        }

        return renderer;
    };
}

export default new ThreeService();
