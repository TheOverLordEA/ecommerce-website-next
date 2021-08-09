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
    <header className="flex items-center bg-black w-auto">
      <div className="w-20 flex p-5">
        <NavMenu />
      </div>

      <Search className="flex flex: 1 1 0% items-center rounded" />
      <div className="flex items-center">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="" Icon={HomeIcon} />
      </div>
    </header>
  );
};

export default Header;
