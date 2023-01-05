import React from "react";
import chair from '../../assets/images/chair.png'
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css'
import { DayPicker } from 'react-day-picker';

const Appointment = () => {
    
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img
                src={chair}
                className="max-w-sm rounded-lg shadow-2xl"
            />
          <div className="bg-white rounded-2xl shadow-lg">
            <DayPicker></DayPicker>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
