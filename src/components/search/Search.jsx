import React from "react";
import "./search.scss";

const Search = ({ searthMonster }) => {
  return (
    <div>
      <input
        className="input__styled"
        type="search"
        placeholder="Search monster"
        onChange={searthMonster}
      />
    </div>
  );
};

export default Search;
