import React, { useState } from "react";
import { useLocation } from "react-router";

const ForgetPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");

    window.open(`https://mail.google.com/mail/u/0/#search/${email}`, "_blank");
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-10">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-5">
        <h1 className="text-2xl font-bold text-center py-5">Reset Password</h1>
        <form onSubmit={handleReset} className="card-body">
          <label className="label">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered"
            placeholder="Enter your email"
            required
          />

          <button type="submit" className="btn btn-neutral mt-4 w-full">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
