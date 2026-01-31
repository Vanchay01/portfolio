import React from "react";
import work from "../../json/work.json"
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 flex justify-center py-6 transition-colors duration-300">
      <div className="w-full max-w-7xl px-4 py-16 transition-colors duration-300">
        <h1 className="mb-4 text-2xl sm:text-6xl font-bold text-gray-700 dark:text-gray-300">
          Works
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {work.map((s) => (
            <Link key={s.id} to={`work/${s.id}`} className="box-skill font-medium">
              <div className="flex items-center">
                <img
                  className="size-6 mr-2"
                  src={s.image}
                  alt=""
                />
                <p>{s.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
 