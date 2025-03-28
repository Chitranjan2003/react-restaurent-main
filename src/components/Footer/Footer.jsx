import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              FOODIE
            </h1>
            <p className="">
            A delightful culinary haven, Food Zone beckons with diverse flavors, tempting aromas, and a gastronomic adventure for all..{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Bhopal, Madhya Pradesh</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:bg-orange-700" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:bg-orange-700" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:bg-orange-700" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer hover:scale-105 ">Home</li>
                  <li className="cursor-pointer hover:scale-105">About</li>
                  <li className="cursor-pointer hover:scale-105">Services</li>
                  <li className="cursor-pointer hover:scale-105 ">Login</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3 ">
                  <li className="cursor-pointer hover:scale-105">DishDiscovery</li>
                  <li className="cursor-pointer hover:scale-105">YumYard</li>
                  <li className="cursor-pointer hover:scale-105">TastyTrailhead</li>
                  <li className="cursor-pointer hover:scale-105">YummyYield</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3 ">
                  <li className="cursor-pointer hover:scale-105">Taste</li>
                  <li className="cursor-pointer hover:scale-105">Yummy</li>
                  <li className="cursor-pointer hover:scale-105">Food</li>
                  <li className="cursor-pointer hover:scale-105">Sweets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2025 All rights reserved || Made with ❤️ by Chitranjan Harode
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
