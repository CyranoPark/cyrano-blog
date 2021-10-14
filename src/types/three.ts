export interface IBackgroundCameraOption {
    fov: number;
    near: number;
    aspect?: number;
    far: number;
    position: ICameraPosition;
}

export interface ICameraPosition {
    x: number;
    y: number;
    z: number;
}
