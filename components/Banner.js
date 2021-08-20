import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="relative lg:h-[500px] md:h-[430px] sm:h-[380px] h-[280px] cursor-pointer">
      <div className="absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 z-20"></div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="lg:h-[500px] md:h-[430px] sm:h-[380px] h-[280px]">
          <Image
            loading="lazy"
            src="https://links.papareact.com/gi1"
            alt=""
            layout="fill"
          />
        </div>
        <div className="">
          <Image
            src="https://links.papareact.com/6ff"
            loading="lazy"
            alt=""
            layout="fill"
          />
        </div>
        <div className="">
          <Image
            src="https://links.papareact.com/7ma"
            loading="lazy"
            alt=""
            layout="fill"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
