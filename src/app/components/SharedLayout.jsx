import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const SharedLayout = ({
  priceFilter,
  searchTerm,
  handleFilter,
  handleSearch,
}) => {
  return (
    <>
      <Navbar
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        priceFilter={priceFilter}
        handleFilter={handleFilter}
      />
      <Outlet />
    </>
  );
};

export default SharedLayout;
