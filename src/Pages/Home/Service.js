import React from "react";

const Service = ({ service }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-8 my-4">
      <figure>
        <img src={service.img} alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-2xl font-semibold">{service.name}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default Service;
