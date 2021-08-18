import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Build from "../public/assets/images/GreenCartIcon.svg";

const Banner = () => {
  return (
    <div className="relative w-100%">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="relative">
          <Image loading="lazy" src={Build} alt="" height="530px" />
        </div>
        <div>
          <Image
            src="https://links.papareact.com/6ff"
            loading="lazy"
            alt=""
            height={500}
            width={1000}
          />
        </div>
        <div>
          <Image
            src={Build}
            loading="lazy"
            alt=""
            height="530px"
            width="100%"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
