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
          <div className="hidden lg:inline-block">
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

      <div className="flex items-center bg-yellow-500 text-white p-2 pl-6 text-base w-100%">
        <div className="flex pl-1 space-evenly space-x-3 flex-1">
          <p className="link items-center">Featured Products</p>
          <p className="link">Today's deals</p>
          <p className="link">World Market</p>
          <p className="link">Website Buisness</p>
          <p className="link hidden lg:inline-flex">Apple</p>
        </div>
        <div className="flex pr-3">
          <p className="link hidden lg:inline-flex "> Beomce A Buisness</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
