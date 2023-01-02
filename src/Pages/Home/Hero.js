import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200" >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Your New <span className="text-green">Smile</span> Starts Here
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-gradient-to-r from-green to-greenHover rounded-3xl hover:bg-gradient-to-l from-greenHover to-green  border-none">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
