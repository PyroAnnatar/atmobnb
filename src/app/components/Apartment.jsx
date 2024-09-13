import { useParams } from "react-router-dom";

import React from "react";
import apartments from "../../apartments.json";

const Apartment = () => {
  const { id } = useParams();

  const apartment = apartments.find((apartment) => String(apartment.id) === id);
  if (!apartment) {
    return <p>Apartment not found</p>;
  }
  return (
    <div className="p-4 flex flex-col justify-center gap-2 text-center">
      <h1 className="text-2xl">{apartment.title}</h1>
      <img src={apartment.image} alt={apartment.title} className="w-full" />
      <p>{apartment.description}</p>
      <p>${apartment.price} / Night</p>
    </div>
  );
};

export default Apartment;
