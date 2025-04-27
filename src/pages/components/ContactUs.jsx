import React from "react";
import logo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneVolume,
  FaPinterest,
  FaQuora,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
const ContactUs = () => {
  return (
    <div className="py-8 border-b-2 border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="col-span-1 flex flex-col items-center gap-6">
          <img src={logo} alt="logo" className="h-22" />
          <div className="flex items-center gap-3">
            <FaInstagram className="bg-zinc-500 size-8 p-1 rounded-md text-white hover:bg-blue-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
            <FaFacebook className="bg-zinc-500 size-8 p-1 rounded-md text-white hover:bg-blue-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
            <FaYoutube className="bg-zinc-500 size-8 p-1 rounded-md text-white hover:bg-blue-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
            <FaLinkedin className="bg-zinc-500 size-8 p-1 rounded-md text-white hover:bg-blue-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
            <FaTwitter className="bg-zinc-500 size-8 p-1 rounded-md text-white hover:bg-blue-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
            <FaPinterest className="bg-zinc-500 size-8 p-1 rounded-md text-white hover:bg-blue-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
            <FaQuora className="bg-zinc-500 size-8 p-1 rounded-md text-white hover:bg-blue-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-3 p-2">
          <h2 className="font-poppins font-medium text-xl">Contact Us</h2>
          <Link className="hover:text-blue-400 text-gray-700 font-poppins transition-colors duration-200">
            Plot no 7, Vaishali Marg, Ganga Sagar-B, Vaishali Nagar, Jaipur,
            Rajasthan 302021
          </Link>
          <Link className="flex items-center gap-2 hover:text-blue-400 text-gray-700 font-poppins transition-colors duration-200 cursor-pointer">
            <FaPhoneVolume className="rotate-42 " />
            <p className="font-poppins">1800 1230 00011 (Toll Free)</p>
          </Link>
          <Link className="flex items-center gap-2 hover:text-blue-400 text-gray-700 font-poppins transition-colors duration-200 cursor-pointer">
            <IoMail className=" " />
            <p className="font-poppins">application02@meridean.org</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
