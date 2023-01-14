import React from "react";
import BookingModal from "./BookingModal";

const ServiceApp = ({ service, setTreatment }) => {
  const { name, slot } = service;
  return (
    <div className="card lg:max-w-lg shadow-md mt-8 mb-8">
      <div className="card-body text-center">
        <h2 className="text-green text-xl font-semibold">{name}</h2>
        <p className="text-sm">
          {slot.length > 0 ? (
            <span className="">{slot[0]}</span>
          ) : (
            <span className="text-red text-left"> No Slots Available</span>
          )}
        </p>
        <p className="text-sm">
          {slot.length} {slot.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
        <label
                        htmlFor="booking-modal"
                        disabled={slot.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn bg-green text-white uppercase border-none hover:bg-greenHover"
                    >Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default ServiceApp;
