import React from "react";
import { useForm } from "react-hook-form";
import {
    useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from '../firebase.init'
import Loading from "../Pages/Shared/Loading";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  let signInError;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(data.email, data.password);
  };

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red text-left">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  if (user || gUser) {
    console.log(user || gUser);
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-red text-left mt-2">
                  {errors.name?.message}
                </p>
              )}
              {/* Email */}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
            {/* Password */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register(
                  "password",
                  {
                    minLength: {
                      value: 8,
                      message: "8 characters or more",
                    },
                  },
                  {
                    required: "Password is required",
                  }
                )}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-red text-left mt-2">
                  {errors.password?.message}
                </p>
              )}
            </div>
            {signInError}
            <button onClick={() =>createUserWithEmailAndPassword() } className="btn bg-green hover:bg-greenHover border-none  w-full mt-5 max-w-xs">
              Login
            </button>
            <p className="text-left">
              <small>
                Already have an account? 
                <Link className="text-green mt-2" to="/login">
                   Please login
                </Link>
              </small>
            </p>
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

export default SignUp;
