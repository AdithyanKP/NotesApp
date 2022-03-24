import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ searchHandle }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3rem" />
      <input
        onChange={(e) => searchHandle(e.target.value)}
        className="search-input"
        type="text"
        placeholder="search..."
      ></input>
    </div>
  );
};

export default Search;
