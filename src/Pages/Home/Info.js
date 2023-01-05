import React from "react";
import clock from "../../assets/icons/clock.svg";
import location from '../../assets/icons/marker.svg';
import call from '../../assets/icons/phone.svg'

const Info = () => {
  return (
    <div className="grid md:grid-cols-3 mt-5 grid-cols-1">
      <div className="bg-grey lg:w-11/12 my-2 h-48 rounded-3xl flex items-center">
        <div>
          <img className="ml-5" src={clock} alt="" />
        </div>
        <div className="text-start ml-5">
          <h1 className="text-white lg:w-11/12 my-2 text-2xl font-semibold">Opening Hours</h1>
          <p className="text-white">Lorem Ipsum is simply dumm</p>
        </div>
      </div>
      <div className="bg-green lg:w-11/12 my-2  md:11/12 h-48 rounded-3xl flex items-center">
        <div>
          <img className="ml-5" src={location} alt="" />
        </div>
        <div className="text-start ml-5">
          <h1 className="text-white text-2xl font-semibold">Visit our location</h1>
          <p className="text-white">Lorem Ipsum is simply dumm</p>
        </div>
      </div>
      <div className="bg-grey my-2  lg:11/12 h-48 rounded-3xl flex items-center">
        <div>
          <img className="ml-5" src={call} alt="" />
        </div>
        <div className="text-start ml-5">
          <h1 className="text-white text-2xl font-semibold">Opening Hours</h1>
          <p className="text-white">Lorem Ipsum is simply dumm</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
