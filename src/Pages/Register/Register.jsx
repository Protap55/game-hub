import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const { createUser, setUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6)
      return toast.error("Password must be at least 6 characters!");
    if (!/[A-Z]/.test(password))
      return toast.error("Password must contain uppercase letter!");
    if (!/[a-z]/.test(password))
      return toast.error("Password must contain lowercase letter!");

    createUser(email, password, name, photo)
      .then((user) => {
        setUser(user);
        toast.success("Registration Successful!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        toast.success("Google Login Successful Done!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-35">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-5">
        <h1 className="text-2xl font-bold text-center py-5">
          Register Your Account
        </h1>
        <form onSubmit={handleRegister} className="card-body">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input input-bordered"
            placeholder="Enter your name"
            required
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered"
            placeholder="Enter email"
            required
          />
          <label className="label">Photo URL</label>
          <input
            type="url"
            name="photo"
            className="input input-bordered"
            placeholder="Enter photo URL"
            required
          />

          <label className="label">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input input-bordered w-full pr-10"
              placeholder="Enter password"
              required
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEye size={20} />
              ) : (
                <AiOutlineEyeInvisible size={20} />
              )}
            </span>
          </div>

          <button type="submit" className="btn btn-neutral mt-4 w-full">
            Register
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn mt-3 flex items-center gap-2 w-full"
          >
            <FcGoogle size={20} /> Sign Up with Google
          </button>

          <p className="font-semibold text-center pt-5">
            Already have an account?{" "}
            <Link to="/login" className="text-secondary">
              Login
            </Link>
          </p>
        </form>
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </div>
  );
};

export default Register;
