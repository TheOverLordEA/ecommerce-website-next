import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center bg-gray-500 max-w-6x1 h-1">
      <Image
        className="object-contain"
        src={EBrand}
        alt="a image"
        width={180}
        height={100}
      />
    </div>
  );
};

export default Logo;
