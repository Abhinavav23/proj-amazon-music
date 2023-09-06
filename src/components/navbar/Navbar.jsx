import React from "react";
import { Logo } from "./Logo";
import { NavLink } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { Profile } from "./Profile";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <ul className="nav-links">
        <li className="link-item">
          <HomeIcon />
          <NavLink to="/">HOME</NavLink>
        </li>

        <li>
          <NavLink to="/podcasts">PODCASTS</NavLink>
        </li>

        <li>
          <NavLink to="/library">LIBRARY</NavLink>
        </li>
      </ul>
      <SearchBar />
      <Profile />
    </nav>
  );
};
