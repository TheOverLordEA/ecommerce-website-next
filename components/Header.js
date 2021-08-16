import {
  UserIcon,
  ShoppingCartIcon,
  LocationMarkerIcon,
  AnnotationIcon,
} from "@heroicons/react/solid";

import { NavMenu, Search, Banner } from "./index";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <div>
      <header className="flex items-center bg-black w-auto p-2 sticky">
        <NavMenu />

        <Search className="flex flex: 1 1 0% items-center rounded" />
        <div className="flex items-center ">
          <HeaderItem title="Where" Icon={LocationMarkerIcon} />
          <HeaderItem title="HOME" Icon={UserIcon} />
          <HeaderItem title="USER" Icon={ShoppingCartIcon} />
          <HeaderItem title="ENG" Icon={AnnotationIcon} />
        </div>
      </header>

      <Banner />
    </div>
  );
};

export default Header;
