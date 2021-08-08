import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import React from "react";

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  render() {
    return (
      <Menu
        noOverlay
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        burgerBarClassName="bg-blue-800 w-5 h-1"
        burgerButtonClassName="flex w-1 h-1"
        menuClassName="w-1"
      >
        <Link href="/" alt="">
          <a onClick={() => this.closeMenu()}>Build</a>
        </Link>
        <Link href="/">
          <a onClick={() => this.closeMenu()}>Build</a>
        </Link>
        <Link href="/">
          <a onClick={() => this.closeMenu()}>Build</a>
        </Link>
      </Menu>
    );
  }
}
export default NavMenu;
