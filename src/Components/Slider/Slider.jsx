import { Carousel } from "@material-tailwind/react";

const Slider = () => {
    return (
        <div className="mt-7">
            <Carousel loop={true} autoplay={true} className="rounded-xl">
      <img
        src="./slide01.jpg"
        alt="image 1"
        className="h-[500px] w-full object-cover object-center"
      />
      <img
        src="slide02.jpg"
        alt="image 2"
        className="h-[500px] w-full object-cover object-center"
      />
      <img
        src="slide03.jpg"
        alt="image 3"
        className="h-[500px] w-full object-cover object-center"
      />
    </Carousel>
        </div>
    );
};

export default Slider;