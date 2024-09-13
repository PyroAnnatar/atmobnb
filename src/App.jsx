"use client";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import apartments from "./apartments.json";
import ApartmentListings from "./app/components/ApartmentListings";
import Apartment from "./app/components/Apartment";
import SharedLayout from "./app/components/SharedLayout";

const App = () => {
  const [data, setData] = useState(apartments);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsBrowser(true);
    }
  }, []);

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  function handleFilter(e) {
    setPriceFilter(e.target.value);
  }

  const filteredData = data.filter((apartment) => {
    const searchMatch = apartment.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());

    let priceMatch = false;
    if (priceFilter === "all") {
      priceMatch = true;
    } else if (priceFilter === "<100") {
      priceMatch = apartment.price < 100;
    } else if (priceFilter === "100-200") {
      priceMatch = apartment.price >= 100 && apartment.price <= 200;
    } else if (priceFilter === ">200") {
      priceMatch = apartment.price > 200;
    }
    return searchMatch && priceMatch;
  });

  return isBrowser ? (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SharedLayout
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                priceFilter={priceFilter}
                handleFilter={handleFilter}
              />
            }
          >
            <Route
              index
              element={<ApartmentListings apartments={filteredData} />}
            />
            <Route path="/apartment/:id" element={<Apartment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  ) : null;
};

export default App;
