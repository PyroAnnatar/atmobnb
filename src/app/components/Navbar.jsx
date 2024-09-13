import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ priceFilter, searchTerm, handleFilter, handleSearch }) => {
  return (
    <div className="flex justify-around items-center gap-2 border-[1px] border-gray-200 py-2 px-1 rounded-md bg-white shadow-md flex-col min-[450px]:flex-row">
      <Link
        to="/"
        className="border-[1px] border-black/25 py-2 px-4 rounded-md bg-teal-700 text-white font-semibold duration-300 hover:text-yellow-300"
      >
        Home
      </Link>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border-[1px] border-black/25 rounded-md"
        />
        <select
          name="priceFilter"
          value={priceFilter}
          onChange={handleFilter}
          className="p-2 rounded-md"
        >
          <option value="all">Price Range</option>
          <option value="<100">Affordable</option>
          <option value="100-200">Average</option>
          <option value=">200">Luxury</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
