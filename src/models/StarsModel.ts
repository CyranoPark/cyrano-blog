import * as THREE from 'three';
import theme from '../context/theme';
import ThreeService from '../services/ThreeService';

class StarsModel {
    material: any;
    particles: any;

    constructor(size: number, count: number) {
        const geometry = new THREE.BufferGeometry();
        const sprite = new THREE.TextureLoader().load('/images/star.png');

        geometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(ThreeService.getRandomParticlePosition(count), 3),
        );
        const material = new THREE.PointsMaterial({
            size: size,
            sizeAttenuation: true,
            map: sprite,
            alphaTest: 0.5,
            transparent: true,
            color: theme.color.yellow,
        });

        this.particles = new THREE.Points(geometry, material);
    }
}

export default StarsModel;
