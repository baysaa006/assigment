import Slider from "./Slider";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from "react-compare-slider";

const Carousel = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",
    "https://businessofhome.com/system/images/12011/small169/Tonic_ChromesthesiaAscend_3.jpg?1675188578",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fKE2AhTQZ6k0-dhpK4O7t9x0NTKwbfasCdz01xB8ISpMT9pENRjHeyRubPEZE7pKycs&usqp=CAU",
  ];
  return (
    <div className="mt-16 inline-flex w-full flex-col items-center overflow-hidden md:mt-20">
      <ReactCompareSlider
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              display: "none",
            }}
            linesStyle={{
              width: 4,
            }}
          />
        }
        style={{ height: 200 }}
        itemOne={<Slider gray={false} images={images} />}
        itemTwo={<Slider gray={true} images={images} />}
      />
    </div>
  );
};

export default Carousel;
