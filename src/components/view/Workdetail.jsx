import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { getWorkById } from "../../data/WorkData";

const Workdetail = () => {
  const pic = "https://4kwallpapers.com/images/walls/thumbs_3t/25036.jpg";
  const { id } = useParams();
  const work = getWorkById(id);
  console.log(work);
  console.log(work.feature);

  const navigate = useNavigate();
  return (
    <div className="bg-slate-100 dark:bg-gray-900 transition-colors duration-400 flex justify-center">
      <div className="w-full px-4 sm:px-0 sm:w-2/3 flex flex-col justify-center items-center py-4 transition-colors duration-400 ">
        <div className="w-full flex justify-between transition-colors duration-400 ">
          <button
            className="box-skill flex justify-center items-center"
            onClick={() => navigate(-1)}
          >
            <MdArrowBackIos />
            BACK
          </button>
        </div>
        <div className="w-full text-gray-700 dark:text-white ">
          <h1 className="text-6xl font-bold mt-4 transition-colors duration-400 first-letter:uppercase">
            {work.name}
          </h1>
          <h3 className="text-lg font-bold mt-4 transition-colors duration-400 first-letter:uppercase">
            {work.postsition}
          </h3>
          <div className="w-full h-[200px] lg:h-[500px] mt-4 transition-colors duration-400">
            <img src={pic} alt="" className="w-full h-full  rounded-xl" />
          </div>
          <h1 className="text-3xl font-bold mt-8 transition-colors duration-400">
            Project Overview
          </h1>
          <p className="text-sm mt-4 transition-colors duration-400 first-letter:uppercase">
            {work.framwork}
          </p>
          <p className="text-sm mt-8 transition-colors duration-400 first-letter:uppercase">
            {work.description}
          </p>
          <h1 className="text-3xl font-bold mt-8 transition-colors duration-400">
            Techniology Stack
          </h1>
          <div className="md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3  ">
            {Object.entries(work.technilogy).map(([key, value], index) => (
              <div key={key} className="box mt-4">
                <div className="flex flex-col justify-start">
                  <p className="text-lg font-bold transition-colors duration-400 first-letter:uppercase">
                    {value.name}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {Object.entries(value.tools).map(([key, tools], index) => (
                      <p
                        key={key}
                        className="rounded-xl border px-2 py-1 text-center first-letter:uppercase"
                      >
                        {tools.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h1 className="text-3xl font-bold mt-8 transition-colors duration-400">
            Key Features
          </h1>
          <div className="md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3  ">
            {Object.entries(work.feature).map(([key, value], index) => (
              <div key={key} className="box mt-4">
                <div className="flex justify-start">
                  <div className="flex justify-center items-start mr-4">
                    <p className="size-10 flex justify-center items-center rounded-full bg-gray-200 text-lg font-bold transition-colors duration-400">
                      {1+index}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-bold transition-colors duration-400">
                      {value.name}
                    </p>
                    <p className="text-sm mt-2 transition-colors duration-400">
                      {value.Description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workdetail;
