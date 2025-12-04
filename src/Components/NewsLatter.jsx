import React from "react";
import { toast } from "react-toastify";
import hero from "../assets/hero.jpg";

const NewsLatter = () => {
  const handleSubscribe = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    if (!email || !name)
      return toast.error("Please provide your name & email ❌");
    toast.success("Subscribed Successfully 💓");
  };

  return (
    <div className="w-11/12 mx-auto ">
      <div className="hero bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-3xl shadow-lg py-12 px-6 md:px-16">
        <div className="hero-content flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7264e2]">
              Subscribe to Our Website
            </h1>
            <p className="text-lg sm:text-xl text-gray-700">
              Follow Our Website & Enjoy the Latest Games!
            </p>
            <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
              Stay updated with our newest releases, game tips, and exciting
              updates directly in your inbox.
            </p>
            <img
              src={hero}
              alt="Hero"
              className="w-full max-w-[350px] sm:max-w-[450px] h-auto mx-auto lg:mx-0 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex-1 w-full max-w-md">
            <div className="card bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                Join Our Newsletter
              </h2>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="btn bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 rounded-lg hover:from-blue-500 hover:to-green-400 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
