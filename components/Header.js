import {
  UserIcon,
  ShoppingCartIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";

import Image from "next/image";
import EBrand from "../public/assets/images/GreenCartIcon.svg";
import HeaderItem from "./HeaderItem";
import NavMenu from "./NavMenu";
import Search from "./Search";

const Header = () => {
  return (
    <header className="flex items-center bg-black w-auto p-2 sticky">
      <NavMenu />

      <Search className="flex flex: 1 1 0% items-center rounded" />
      <div className="flex items-center ">
        <HeaderItem title="Where" Icon={LocationMarkerIcon} />
        <HeaderItem title="HOME" Icon={UserIcon} />
        <HeaderItem title="USER" Icon={ShoppingCartIcon} />
      </div>
    </header>
  );
};

export default Header;
