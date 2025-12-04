import React from "react";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full mt-20 bg-black text-white py-12 px-6 md:px-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + About */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Logo" className="w-40 mb-4" />
          <p className="text-gray-400 leading-relaxed">
            GameHub — your ultimate platform for discovering, playing and
            exploring amazing games. Stay connected and enjoy the best gaming
            experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/" className="hover:text-purple-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/all-games" className="hover:text-purple-400 transition">
                All Games
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-purple-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-purple-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-purple-400 transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            Connect With Us
          </h3>

          <div className="flex gap-4 mb-4 text-2xl">
            <a
              href="https://www.facebook.com/Protap55/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/protapdutta"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://youtube.com/channel/yourchannel"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-300 transition"
            >
              <FaTwitter />
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            Email:{" "}
            <a
              href="mailto:support@gamehub.com"
              className="hover:text-purple-400 transition"
            >
              support@gamehub.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-purple-400 font-semibold">GameHub</span> — All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
