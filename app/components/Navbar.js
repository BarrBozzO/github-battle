import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav row">
      <div>
        <NavLink
          exact
          className="nav__item button"
          activeClassName="nav__item-active"
          to="/"
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          className="nav__item button"
          activeClassName="nav__item-active"
          to="/battle"
        >
          Battle
        </NavLink>
      </div>
      <div>
        <NavLink
          className="nav__item button"
          activeClassName="nav__item-active"
          to="/popular"
        >
          Popular
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
