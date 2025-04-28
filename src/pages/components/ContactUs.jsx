import React from "react";
import logo from "../../assets/Aladdin-Group.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhoneVolume,
  FaPinterest,
  FaQuora,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
const ContactUs = () => {
  return (
    <div className="py-8 border-b border-gray-50 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
            Aladdin Group - UK AI Education Specialists
          </Link>
          <Link className="flex items-center gap-2 hover:text-blue-400 text-gray-700 font-poppins transition-colors duration-200 cursor-pointer">
            <FaLocationDot className="" />
            <p className="font-poppins">
              23 Basedale Road, Dagenham, Essex RM9 4QA
            </p>
          </Link>
          <Link className="flex items-center gap-2 hover:text-blue-400 text-gray-700 font-poppins transition-colors duration-200 cursor-pointer">
            <FaPhoneVolume className="rotate-42 " />
            <p className="font-poppins">+44 7943 642473 (UK Office)</p>
          </Link>
          <Link className="flex items-center gap-2 hover:text-blue-400 text-gray-700 font-poppins transition-colors duration-200 cursor-pointer">
            <RiWhatsappFill />
            <p className="font-poppins">WhatsApp: +44 7943 642473</p>
          </Link>
          <Link className="flex items-center gap-2 hover:text-blue-400 text-gray-700 font-poppins transition-colors duration-200 cursor-pointer">
            <IoMail className=" " />
            <p className="font-poppins">admissions@aladdingroup.co.uk</p>
          </Link>
        </div>
        <div className="col-span-1 flex flex-col gap-3 p-2">
          <h2 className="text-xl font-medium font-poppins">Manu</h2>
          <ul className="flex flex-col">
            <li>
              <Link
                to={"/"}
                className="text-blue-dark font-medium font-poppins hover:text-blue-dark/80 hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/courses"}
                className="text-blue-dark font-medium font-poppins hover:text-blue-dark/80 hover:translate-x-2 transition-transform"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="text-blue-dark font-medium font-poppins hover:text-blue-dark/80 hover:translate-x-2 transition-transform"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <p className=" text-gray-500 font-poppins font-medium text-sm">
          © {new Date().getFullYear()} Aladdin Overseas. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
