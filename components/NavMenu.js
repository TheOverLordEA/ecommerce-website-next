import React from "react";
import { MenuIcon } from "@heroicons/react/solid";

class NavMenu extends React.Component {
  state = {
    menuOpen: false,
  };
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  render() {
    return (
      <div className="flex h-8 items-center p-2">
        <MenuIcon className="curosor-pointer h-10" onClick="/" />
      </div>
    );
  }
}

export default NavMenu;
