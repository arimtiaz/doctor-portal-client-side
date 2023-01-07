import React from "react";
import { format } from "date-fns";

const BookingModal = ({ date, treatment }) => {
  const { name, slot } = treatment;

  const handleBooking = event => {
    event.preventDefault();
    const slot = event.target.slot.value
    console.log(slot)
  }

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal text-left">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="mt-5">
            <form onSubmit={handleBooking}>
            <input
            name="date"
              type="text"
              value={format(date, "PP")}
              disabled
              placeholder="Type here"
              className="input input-bordered input-md w-full mb-3 "
            />
            {/* Time */}
            <select name="slot" className="select font-normal w-full input-bordered mb-3">
              <option disabled selected>
                Pick a time
              </option>
              {
                slot.map(slot => <option value={slot}>{slot}</option>)
              }
            </select>
            <input
            name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered input-md w-full mb-3"
            />
            <input
            name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered input-md w-full mb-3"
            />
            <input
            name="email"
              type="text"
              placeholder="Email"
              className="input input-bordered input-md w-full"
            />
            </form>
          </div>
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="w-full btn bg-grey border-none"
            >
              Submit!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
