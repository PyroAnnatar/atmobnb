import { Link } from "react-router-dom";

import React from "react";

const ApartmentListings = ({ apartments }) => {
  return (
    <div>
      {apartments.length > 0 ? (
        apartments.map((apartment) => (
          <div
            className="bg-white m-4 text-black p-4 border-[1px] border-gray-200 flex gap-4 shadow-sm"
            key={apartment.id}
          >
            <img
              src={apartment.image}
              alt={apartment.image}
              className="apartment-image rounded-md"
            />
            <div className="flex flex-col gap-4 items-start">
              <h2 className="text-xl">{apartment.title}</h2>
              <p>{apartment.description}</p>
              <p>${apartment.price} / Night</p>
              <Link to={`/apartment/${apartment.id}`}>
                <button className="py-2 px-3 bg-teal-700 hover:bg-teal-600 rounded-md text-white">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No apartments found</p>
      )}
    </div>
  );
};

export default ApartmentListings;
