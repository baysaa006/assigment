import React from "react";

function Slider({ gray, images }: any) {
  return (
    <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] ">
      <div className=" flex w-full items-center justify-center">
        <ul className="relative flex animate-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
          {images.map((src: string, index: number) => (
            <li key={index} className="relative">
              <img
                id={`beforeImage${index}`}
                className={gray && "grayscale"}
                src={src}
                alt="pic"
              />
            </li>
          ))}
        </ul>
        <ul className="relative flex animate-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
          {images.map((src: string, index: number) => (
            <li key={index} className="relative">
              <img
                id={`beforeImage${index}`}
                className={gray && "grayscale"}
                src={src}
                alt="pic"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Slider;
