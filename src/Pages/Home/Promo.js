import React from "react";
import treatment from "../../assets/images/treatment.png";

const Promo = () => {
  return (
    <div>
      <div className="hero min-h-screen p-28">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-left ml-10">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it 
            </p>
            <button className="btn bg-green border-none hover:bg-greenHover">
              Get Started
            </button>
          </div>
          <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Promo;
