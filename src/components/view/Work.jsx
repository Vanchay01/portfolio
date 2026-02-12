import React from "react";
import work from "../../json/work.js"
import { Link } from "react-router-dom";
import cover_portfolio from "../../assets/portfolio.jpg";
import cover_api from "../../assets/api.jpg";

const Work = () => {
    const images = {
      cover_portfolio,
      cover_api,
    };
  const pic = "https://4kwallpapers.com/images/walls/thumbs_3t/25036.jpg";
  return (
    <div className="overflow-hidden w-full bg-gray-100 dark:bg-gray-900 flex justify-center py-6 transition-all duration-300">
      <div className="w-full max-w-7xl px-4 pt-16 transition-colors duration-300">
        <h1 className="mb-6 text-2xl sm:text-6xl font-bold text-gray-700 dark:text-gray-300">
          Works
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {work.map((s) => (
            <Link key={s.id} to={`work/${s.id}`} className="box-skill p-1 font-medium">
              <div className="flex flex-col ">
                <img
                  className="w-full rounded-lg"
                  src={images[s.image]}
                  alt=""
                />
                <p className="m-2">{s.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
 