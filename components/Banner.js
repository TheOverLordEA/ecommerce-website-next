import Image from "next/image";
import Good from "../public/assets/images/GreenCartIcon.svg";

const Banner = () => {
  return (
    <div className="">
      <Image
        src={Good}
        alt=""
        className="bg-contain bg-center h-[100px]"
        style="background-image"
      />
    </div>
  );
};

export default Banner;
