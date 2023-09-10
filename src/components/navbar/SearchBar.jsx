import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
const style = {
  display: "flex",
  alignItems: "center",
  background: "#fff",
  padding: '0.5rem',
  borderRadius: '2.5rem',
  border: 'none'
};
export const SearchBar = () => {
  return (
    <section style={style}>
      <input type="text" name="search" id="search" placeholder="search here" />
      <SearchIcon />
    </section>
  );
};
