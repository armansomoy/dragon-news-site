import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, total_view, rating, author, details, thumbnail_url, image_url } = news;

  return (
    <div className="border mb-5 rounded">
      <div className="bg-base-200 px-2 py-3">
        <div className="flex">
          <div>
            <img className="h-12 rounded-full" src={author.img} alt="" />
          </div>
          <div className="pl-2">
            <p className="font-bold">{author.name}</p>
            <p className="text-sm text-[#706F6F]">{author.published_date}</p>
          </div>
        </div>
        <div></div>
      </div>

      <div className="p-3">
        <h4 className="text-xl font-bold py-2 text-[#403F3F]">{title}</h4>
        <img className="w-full h-80" src={image_url} alt="Thumbnai" />
        {details.length > 150 ? (
          <p className="py-2 text-[#706F6F]">
            {details.slice(0, 150)} <Link to={`/news/${_id}`} className="ml-3 text-blue-600"> Read More</Link>{" "}
          </p>
        ) : (
          <p>{details}</p>
        )}
         <hr />
      <div className="flex place-content-between pt-3">
        <div>Ratings: {rating.number} </div>
        <div>{total_view}</div>
      </div>
      </div>
     
    </div>
  );
};

export default NewsCard;
