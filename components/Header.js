import {
  BadgeCheckIcon,
  HomeIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

import Image from "next/image";
import HeaderItem from "./HeaderItem";
import Search from "./Search";

const Header = () => {
  return (
    <header className="flex items-center bg-black">
      <Search className="flex flex: 1 1 0% items-center" />
      <div className="flex items-center">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="" Icon={HomeIcon} />
      </div>
    </header>
  );
};

export default Header;
