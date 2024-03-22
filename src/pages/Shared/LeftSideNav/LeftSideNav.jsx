import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="border rounded py-4 px-3 mb-6">
      <h2 className="text-2xl mb-3 font-bold">All Cacategories </h2>
      {
        categories.map(  category => <Link to={`/category/${category.id}`} className="block ml-4 text-[#403F3F] py-4 text-xl font-semibold" key={category.id}>{category.name}</Link>)
      }
    </div>
  );
};

export default LeftSideNav;
