import {
  UserIcon,
  ShoppingCartIcon,
  LocationMarkerIcon,
  AnnotationIcon,
} from "@heroicons/react/solid";

import { NavMenu, Search } from "./index";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <div className="sticky">
      <header className="flex items-center bg-black w-auto p-2">
        <NavMenu />

        <Search className="flex flex: 1 1 0% items-center rounded" />
        <div className="flex items-center p-1 w-18 ">
          <div className=" ">
            <HeaderItem title="Where" Icon={LocationMarkerIcon} />
          </div>
          <div className="">
            <HeaderItem title="ENG" Icon={AnnotationIcon} />
          </div>
          <div className="">
            <HeaderItem title="HOME" Icon={UserIcon} />
          </div>

          <div className="">
            <HeaderItem title="USER" Icon={ShoppingCartIcon} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
