import React from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";
import { Fragment, useEffect, useRef, useState } from "react";

const NavMenu = () => {
  return (
    <Menu>
      <Menu.Button className="inline-flex p-3">
        {" "}
        <MenuIcon className="w-8" />
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none h-80 inline-block absolute ">
          <div className="px-1 py-1 grid">
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={
                    active ? "bg-blue-500 text-white" : "bg-white text-black"
                  }
                  href="/"
                >
                  Account
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link className={`${active && "bg-blue-800"}`} href="/">
                  Build
                </Link>
              )}
            </Menu.Item>
            <Menu.Item disabled>
              <span className="opacity-80">TheE work w</span>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavMenu;
