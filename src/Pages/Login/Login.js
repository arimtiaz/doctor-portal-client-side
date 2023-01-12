import React from "react";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { Link } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  let signInError;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    signInWithEmailAndPassword(data.email, data.password)
  };

  if( loading || gLoading){
    return <Loading></Loading>
  }

  if(error || gError){
    signInError = <p className="text-red text-left"><small>{error?.message || gError?.message }</small></p>
  }

  if (gUser) {
    console.log(gUser);
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red text-left mt-2">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  minLength: {
                    value:8,
                    message: '8 characters or more'
                  }
                }, {
                  required: "Password is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-red text-left mt-2">
                  {errors.password?.message}
                </p>
              )}
            </div>
          {signInError}
           <button className="btn bg-green hover:bg-greenHover border-none  w-full mt-5 max-w-xs">Login</button>
           <p className="text-left"><small>New to Doctors Portal? <Link className="text-green mt-2" to="/signup">Create an account</Link></small></p>
          </form>
          <div className="divider">
            <p>OR</p>
          </div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn bg-white border-grey text-grey hover:bg-grey hover:text-white"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
