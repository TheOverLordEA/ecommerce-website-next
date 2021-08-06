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
        width={180}
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        className="bg-gray-100 w-8"
      >
        <Link href="/Build">
          <div onClick={() => this.closeMenu()}>Build</div>
        </Link>
        <Link href="/Build">
          <div onClick={() => this.closeMenu()}>Build</div>
        </Link>
        <Link href="/Build">
          <div onClick={() => this.closeMenu()}>Build</div>
        </Link>
      </Menu>
    );
  }
}
export default NavMenu;
