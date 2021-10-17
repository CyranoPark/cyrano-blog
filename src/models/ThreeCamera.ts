import * as THREE from 'three';
import { ICameraOption, ICameraPosition } from '../types/three';

class ThreeCamera extends THREE.PerspectiveCamera {
    constructor(cameraOption: ICameraOption, cameraPosition: ICameraPosition) {
        super(
            cameraOption.fov,
            cameraOption?.aspect || window.innerWidth / window.innerHeight,
            cameraOption.near,
            cameraOption.far,
        );
        this.cameraOption = cameraOption;
        this.cameraPosition = cameraPosition;

        this.position.z = cameraPosition.z;
        this.position.y = cameraPosition.y;
        this.position.x = cameraPosition.x;
    }

    cameraOption: ICameraOption | null = null;
    cameraPosition: ICameraPosition | null = null;
    position: any = new THREE.Vector3();

    // types
    aspect: number;
    updateProjectionMatrix: () => void;
    lookAt: (position: ICameraPosition) => void;
}

export default ThreeCamera;
