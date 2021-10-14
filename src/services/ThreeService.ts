class ThreeService {
    animate = (scene: any, camera: any, renderer: any, callback: () => void) => {
        requestAnimationFrame(this.animate.bind(this, scene, camera, renderer, callback));
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
}

export default new ThreeService();
