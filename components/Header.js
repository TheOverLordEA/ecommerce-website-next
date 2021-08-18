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
    <header>
      <div className="flex items-center bg-black w-100% p-3 ">
        <NavMenu />

        <Search className="flex flex: 1 1 0% items-center rounded" />
        <div className="flex items-center ">
          <div className=" ">
            <HeaderItem title="Where" Icon={LocationMarkerIcon} />
          </div>
          <div className="">
            <HeaderItem title="ENG" Icon={AnnotationIcon} />
          </div>
          <div className="">
            <HeaderItem title="HOME" Icon={UserIcon} />
          </div>
          <div className="flex items-center">
            <span className="absolute right-4 top-10 h-6 w-6 bg-green-800 text-center text-white rounded-full font-bold">
              {" "}
              8
            </span>
            <HeaderItem title="BASKET" Icon={ShoppingCartIcon} />
          </div>
        </div>
      </div>

      <div className="flex items-center bg-yellow-500 text-white space-x-3 p-2 pl-6 text-base ">
        <p className="link items-center">8</p>
        <p className="link">Prime</p>
        <p className="">Best</p>
        <p className="">New</p>
        <p className="">World Market</p>
      </div>
    </header>
  );
};

export default Header;
