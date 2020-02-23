import React from 'react';
import logo from '../../assets/tree1.png';
//import useWindowSize from "@rooks/use-window-size";
import ParticleImage, {
    ParticleOptions,
    Vector,
    forces,
    ParticleForce
} from "react-particle-image";


const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
        // Get pixel
        const pixel = image.get(x, y);
        // Make a particle for this pixel if blue > 50 (range 0-255)
        return pixel.b > 50;
    },
    color: ({ x, y, image }) => "lightgrey",
    radius: () => Math.random() * 1.5 + 0.5,
    mass: () => 40,
    friction: () => 0.15,
    initialPosition: ({ canvasDimensions }) => {
        return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
    }
};

const motionForce = (x: number, y: number): ParticleForce => {
    return forces.disturbance(x, y, 15);
};

// the Home page
export function About() {
    //const { innerWidth, innerHeight } = useWindowSize();
    return (
        <div className="App">

            <header >
                <h1></h1>
                <ParticleImage
                    src={logo}
                    width="400"
                    height="400"
                    scale={0.2}
                    entropy={5}
                    maxParticles={15000}
                    particleOptions={particleOptions}
                    mouseMoveForce={motionForce}
                    touchMoveForce={motionForce}
                    backgroundColor="black"
                />

            </header>
            <h1>
                OneTreeWood
            </h1>
        </div>
    );
}