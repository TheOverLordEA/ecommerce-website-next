import React from "react";

import { slide as Menu } from "react-burger-menu";
import Link from "next/link";

class Sidebar extends React.Component {
  state = {
    menuOpen: false,
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <Menu
        width={180}
        className="flex outline-none top-0 "
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <Link
          href="About"
          className="menu-item"
          to="About"
          smooth={true}
          duration={500}
        >
          About
        </Link>
        <Link
          href="/menu-item"
          className="menu-item"
          to="TopCategories"
          smooth={true}
          duration={500}
        >
          Top-level Categories
        </Link>
        <Link
          href="Subcategories"
          className="menu-item"
          to="SubCategories"
          smooth={true}
          duration={500}
        >
          Subcategories
        </Link>
        <Link
          href="ee"
          className="menu-item"
          to="EmbededPlatforms"
          smooth={true}
          duration={500}
        >
          Embedded Platforms
        </Link>
        <Link
          href="top"
          className="menu-item"
          to="Users"
          smooth={true}
          duration={500}
        >
          Top Users
        </Link>
        <Link
          href="top"
          className="menu-item"
          to="Sentiments"
          smooth={true}
          duration={500}
        >
          Sentiments
        </Link>
      </Menu>
    );
  }
}
export default Sidebar;
