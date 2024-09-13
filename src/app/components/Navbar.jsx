import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ priceFilter, searchTerm, handleFilter, handleSearch }) => {
  return (
    <div className="flex justify-center items-center mt-4 gap-2">
      <Link to="/">Home</Link>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 border-[1px] border-black"
      />
      <select
        name="priceFilter"
        value={priceFilter}
        onChange={handleFilter}
        className="p-2"
      >
        <option value="all">Price Range</option>
        <option value="<100">Affordable</option>
        <option value="100-200">Average</option>
        <option value=">200">Luxury</option>
      </select>
    </div>
  );
};

export default Navbar;
