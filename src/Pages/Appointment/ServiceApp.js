import React from "react";

const ServiceApp = ({ service }) => {
  const { name, slot } = service;
  return (
    <div className="card lg:max-w-lg shadow-md mt-8">
      <div className="card-body text-center">
        <h2 className="text-green text-xl font-semibold">{name}</h2>
        <p>
          {slot.length > 0 ? (
            <span className="">{slot[0]}</span>
          ) : (
            <span className="text-red text-left"> No Slots Available</span>
          )}
        </p>
        <p className="">
          {slot.length} {slot.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <button className="btn bg-green border-none w-3/4">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceApp;
