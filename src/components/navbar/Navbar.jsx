import React from "react";
import { Logo } from "./Logo";
import { NavLink } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { Profile } from "./Profile";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <ul className="nav-links">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>

        <li>
          <NavLink to="/podcasts">PODCASTS</NavLink>
        </li>

        <li>
          <NavLink to="/library">LIBRARY</NavLink>
        </li>
      </ul>
      <SearchBar/>
      <Profile/>
    </nav>
  );
};
