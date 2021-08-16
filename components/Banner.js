import Image from "next/image";
import Eq from "../public/assets/images/GreenCartIcon.svg";

const Banner = () => {
  return (
    <div className>
      <div>
        <Image src={Eq} />
      </div>
    </div>
  );
};

export default Banner;
