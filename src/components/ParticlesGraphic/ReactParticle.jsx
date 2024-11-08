import React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
 import './reactParticles.css'  

const ParticlesPage = ()=>{
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
      }, []);
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);
    return(
        <>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: false,
            },
            background:{
              value:"#ffffff"
            },
            background: {
              color: {
                value: "#ffffff",
              },
            },
            fpsLimit: 150,
            interactivity: {
              modes: {
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  quantity: 3,
                },
                
              },
              
            },
           
            particles: {
              links: {
                color: "#cccc",
                distance: 100,
                enable: true,
                opacity: 1,
                width: 1,
              },
              color: {
                value: "#87CEEB",
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 2, max: 5 },
              },
              number: {
                value: window.innerWidth > 768 ? 80 : 40,
                density: {
                  enable: true,
                  value_area: 800,
                },
                
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                speed: 3,
              },
              opacity: {
                value: 1,
              },
              collisions: {
                enable: true,
              },
            },
          }}
        />
        </>
    )
}
export default ParticlesPage
