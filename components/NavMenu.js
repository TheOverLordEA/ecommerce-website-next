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
      <div>
        <Menu
          left
          noOverlay
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          burgerButtonClassName="w-10 h-10 bg-black fixed"
          menuClassName="bg-black"
          burgerBarClassName="bg-indigo-500"
        >
          <button ReactBurgerMenuBtn="width-1">
            <Link href="/" alt="">
              <a onClick={() => this.closeMenu()}>Build</a>
            </Link>
            <Link href="/">
              <a onClick={() => this.closeMenu()}>Build</a>
            </Link>
            <Link href="/">
              <a onClick={() => this.closeMenu()}>Build</a>
            </Link>
          </button>
        </Menu>
      </div>
    );
  }
}
export default NavMenu;
