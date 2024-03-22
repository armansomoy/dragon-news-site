import React from "react";
import { FaGoogle, FaTwitter, FaGithub, FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { Link } from "react-router-dom";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="border rounded py-4 px-3 mb-6">
        <h2 className="text-2xl font-semibold pb-2">Login With</h2>
        <button className="btn w-full rounded my-2">
          <FaGoogle />
          Google
        </button>
        <button className="btn w-full rounded my-2">
          <FaGithub />
          Github
        </button>
      </div>
      <div className="border rounded py-4 px-3 mb-6">
        <h2 className="text-2xl font-semibold pb-2">Fund Us On</h2>

        <Link className="flex  w-full rounded mt-2 align-text-center text-lg font-semibold p-2 items-center rounded-t-lg rounded-b-none border-slate-400 border">
          {" "}
          <div className="p-3 rounded-full mr-3 bg-[#F3F3F3]">
            <FaFacebookF  className="text-blue-600"/>{" "}
          </div>
          Facebook
        </Link>
        <Link className="flex  w-full align-text-center text-lg font-semibold p-2 items-center rounded-none border-t-0  border-slate-400 border">
          {" "}
          <div className="p-3 rounded-full mr-3 bg-[#F3F3F3]">
            <FaTwitter className="text-black-700" />
          </div>
          Twitter
        </Link>
        <Link className="flex  w-full rounded  align-text-center text-lg font-semibold p-2 items-center rounded-b-lg rounded-t-none border-t-0 border-slate-400 border">
          {" "}
          <div className="p-3 rounded-full mr-3 bg-[#F3F3F3]">
            <CiInstagram  className="text-pink-600"/>{" "}
          </div>
          Instagram
        </Link>
      </div>
      <div className="border rounded py-4 px-3 mb-6">
        <h2 className="text-2xl font-semibold pb-2">Q-Zone</h2>
        <img className="mb-5" src={qZone1} alt="" />
        <img className="mb-5" src={qZone2} alt="" />
        <img className="mb-5" src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
