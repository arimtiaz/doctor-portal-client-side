import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import ServiceApp from "./ServiceApp";
import Service from "./ServiceApp";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null)
  useEffect(() => {
    fetch("http://localhost:3000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });

  return (
    <div>
      <div>
        <h1 className="text-2xl text-green">
          Available Appointments on {format(date, "PP")}
        </h1>
        <p className="text-grey">Please select a service</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-x-5">
        {services.map((service) => (
          <ServiceApp key={service._id} setTreatment={setTreatment} service={service}></ServiceApp>
        ))}
      </div>
      {treatment && <BookingModal date={date} treatment={treatment}></BookingModal>}
    </div>
  );
};

export default AvailableAppointments;
