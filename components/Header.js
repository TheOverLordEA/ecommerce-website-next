import {
  BadgeCheckIcon,
  HomeIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

import Image from "next/image";
import EBrand from "../public/assets/images/GreenCartIcon.svg";
import HeaderItem from "./HeaderItem";
import NavMenu from "./NavMenu";
import Search from "./Search";

const Header = () => {
  return (
    <header className="flex items-center bg-black">
      <NavMenu />
      <Image
        className="object-contain"
        src={EBrand}
        alt="a image"
        width={180}
        height={100}
      />
      <Search className="flex flex: 1 1 0% items-center" />
      <div className="flex items-center">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="" Icon={HomeIcon} />
      </div>
    </header>
  );
};

export default Header;
