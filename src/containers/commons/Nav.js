import React from "react";
import { NavLink } from "react-router-dom";

import SearchInput from "./SearchInput";

const Nav = () => (
  <div>
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" className="logo navItem">
            <h1 >Giffy-browser</h1>
          </NavLink>
        </li>
      </ul>
      <ul>

        <li>
          <NavLink to="/CarouselLib" >
            <h1 >Lib Implementation</h1>
          </NavLink>
        </li>

      </ul>
      <ul>
        <SearchInput />
      </ul>
    </nav>
  </div>
);

export default Nav;