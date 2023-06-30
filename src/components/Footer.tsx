import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <div>
      <div className="flex  flex-col items-center m-auto  relative h-[60vh] w-[577px] justify-center">
        <h1 className="text-[32px] font-bold z-20 mb-3">
          We have what you’re looking for
        </h1>
        <div className="flex gap-16 flex-col">
          <p className="text-sm font-medium text-center text-purple-500  z-20 mt-16">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            a
          </p>
        </div>
        <div className="z-20 mt-16">
          <button className="z-20 text-white rounded-lg text-lg font-bold px-[35px] py-[15px] flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
            Get Started Now
          </button>
        </div>
      </div>
      <hr className=" border-t-1 border-slate-500 z-20 relative w-[1160px] m-auto" />
      <div className="flex  z-20 items-center text-center justify-between px-[175px] h-[74px] w-auto ">
        <div className=" text-white z-20">
          All Right Reserved @Copyright 2023
        </div>
        <div className="flex gap-5">
          <div>
            <ul className="flex gap-4 ">
              <li className=" text-white z-20">Term of Service</li>
              <li className=" text-white z-20">Privacy Policy</li>
              <li className=" text-white z-20">Product</li>
            </ul>
          </div>
          <div className="flex gap-4">
            <img src="/assests/facebook.png" className="cursor-pointer z-20" alt="Facebook" />
            <img src="/assests/youtube.png" className="cursor-pointer z-20" alt="YouTube" />
            <img src="/assests/instagram.png" className="cursor-pointer z-20" alt="Instagram" />
            <img src="/assests/twitter.png" className="cursor-pointer z-20" alt="Twitter" />
          </div>
        </div>
      </div>
      <img className="absolute bottom-0 w-full z-0" src="/assests/footerpoly.png" alt="Footer Polygon" />
    </div>
  );
};

export default Footer;
