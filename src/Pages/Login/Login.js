import React from "react";
import { useForm } from "react-hook-form";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  if (user) {
    console.log(user);
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
                {...register("email", {
                  pattern: { value: /[A-Za-z]{3}/, message: "error message" },
                })}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <input aria-invalid={errors.firstName ? "true" : "false"} />
            {errors.firstName?.type === "required" && (
              <p role="alert">First name is required</p>
            )}

            <input
              {...register("mail", { required: "Email Address is required" })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && <p role="alert">{errors.mail?.message}</p>}

            <input type="submit" />
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
