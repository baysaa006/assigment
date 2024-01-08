import React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
const Hero = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div className="mt-6 text-white  md:mt-14">
      <div className="container mx-auto  text-center sm:px-6 lg:px-8">
        <Particles
          className="left-0 top-0 z-0 h-10  w-full opacity-20"
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: "rgb(10,10,25)",
            },
            fpsLimit: 140,
            particles: {
              shape: {
                type: "circle",
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 0.5,
                },
                value: 1.8,
              },
              color: {
                value: "#f1f1f1",
              },
              number: {
                density: {
                  enable: true,
                  area: 1080,
                },
                limit: 0,
                value: 800,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.5,
                  speed: 1.6,
                  sync: false,
                },
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              move: {
                enable: true,
                speed: 0.1, // Adjust the speed as needed
                direction: "none", // Change the direction if needed ("none", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left")
                random: false, // Set to true for random movement
                straight: false, // Set to true for straight movement
                outMode: "out", // Change to "out" to make particles disappear from the canvas
              },
              interactivity: {
                detectsOn: "canvas",
                events: {
                  resize: true,
                },
              },
            },
          }}
        />
        <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          ToomAI таньд туслана
        </h1>
        <p className="mb-8 text-xl tracking-[1.2px] sm:text-2xl md:text-3xl lg:text-4xl ">
          Таны өрөөний зурагыг хүссэн тань өөрчилж өгөх болно.
        </p>
        <div className="flex justify-center">
          <button className="rounded-full bg-gray-900 px-6 py-[6px] font-bold tracking-[1.2px]  text-white	">
            Өөрчлөлт хийх
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
