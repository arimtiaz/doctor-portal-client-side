import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";

const Appointment = () => {
  const [date, setDate] = useState(new Date())

  return (
    <div>
     <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
     <AvailableAppointments date={date}></AvailableAppointments>
    </div>
  );
};

export default Appointment;
