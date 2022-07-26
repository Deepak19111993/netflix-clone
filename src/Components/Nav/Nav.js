import React from "react";
import { NavWrapper } from "./Nav.styles";

const Nav = () => {
  return (
    <NavWrapper className="nav">
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f"
        alt="Netflix Logo"
      />
      <img
        className="nav-avatar"
        src="https://pbs.twimg.com/profile_images/124011999041155"
        alt="Netflix Logo"
      />
    </NavWrapper>
  );
};

export default Nav;
