import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex rounded p-2 bg-[#F3F3F3]">
      <button className="btn text-white btn-error condery rounded mr-2">
        Breaking News
      </button>
      <Marquee pauseOnHover={true} speed={100} className="text-[#403F3F] font-semibold">
        <Link to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>{" "}
        <Link to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>{" "}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
