import {
  UserIcon,
  ShoppingCartIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";

import HeaderItem from "./HeaderItem";
import NavMenu from "./NavMenu";
import Search from "./Search";
import Banner from "./Banner";

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
      <Banner />
    </header>
  );
};

export default Header;
