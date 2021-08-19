import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="relative h-[500px]">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="h-[500px] w-[380px]">
          <Image
            loading="lazy"
            src="https://links.papareact.com/gi1"
            alt=""
            layout="fill"
          />
        </div>
        <div>
          <Image
            src="https://links.papareact.com/6ff"
            loading="lazy"
            alt=""
            layout="fill"
          />
        </div>
        <div>
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
