export interface IBackgroundCameraOption {
    camera: ICameraOption;
    position: ICameraPosition;
}

export interface ICameraPosition {
    x: number;
    y: number;
    z: number;
}

export interface ICameraOption {
    fov: number;
    near: number;
    aspect?: number;
    far: number;
}
