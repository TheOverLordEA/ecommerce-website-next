import Image from "next/image";
import Good from "../public/assets/images/GreenCartIcon.svg";

const Banner = () => {
  return (
    <div className="relative h-[380px]">
      <Image src={Good} layout="fill" objectFit="cover" />
    </div>
  );
};

export default Banner;
