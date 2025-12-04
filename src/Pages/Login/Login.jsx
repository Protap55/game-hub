import React, { useContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const { loginUser, googleLogin, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((user) => {
        setUser(user.user);
        toast.success("Login Successful!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        toast.success("Google Login Successful!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleForgetPasswordClick = () => {
    const emailInput = document.querySelector('input[name="email"]').value;
    navigate("/forget-password", { state: { email: emailInput } });
  };

  return (
    <div className="flex py-35 justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-5">
        <h1 className="text-2xl font-bold text-center py-5">
          Login to Your Account
        </h1>
        <form onSubmit={handleLogin} className="card-body">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered"
            placeholder="Enter your email"
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
            Login
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn mt-3 flex items-center gap-2 w-full"
          >
            <FcGoogle size={20} /> Sign In with Google
          </button>

          <p className="font-semibold text-center pt-5">
            Dont’t Have An Account ?{" "}
            <Link to="/register" className="text-secondary">
              Register
            </Link>
          </p>

          <p className="font-semibold text-center pt-2">
            <button
              type="button"
              onClick={handleForgetPasswordClick}
              className="text-secondary underline"
            >
              Forgot Password?
            </button>
          </p>
        </form>
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </div>
  );
};

export default Login;
