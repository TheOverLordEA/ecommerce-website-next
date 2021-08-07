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
        burgerBarClassName="bg-gray-100 h-1 w-10px"
        burgerButtonClassName="p-fixed w-1 h-30px"
        crossButtonClassName="w-24px"
      >
        <Link href="/Build">
          <abbr onClick={() => this.closeMenu()}>Build</abbr>
        </Link>
        <Link href="/Build">
          <a onClick={() => this.closeMenu()}>Build</a>
        </Link>
        <Link href="/Build">
          <a onClick={() => this.closeMenu()}>Build</a>
        </Link>
      </Menu>
    );
  }
}
export default NavMenu;
