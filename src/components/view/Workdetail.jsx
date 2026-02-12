import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { getWorkById } from "../../data/WorkData";

import cover_portfolio from "../../assets/portfolio.jpg";
import cover_api from "../../assets/api.jpg";

const Workdetail = () => {
  const viewcode = "</> View Code";
  const { id } = useParams();
  const work = getWorkById(id);
  console.log(work);

  const images = {
    cover_portfolio,
    cover_api,
  };
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden bg-slate-100 dark:bg-gray-900 transition-colors duration-400 flex justify-center">
      <div className="w-full px-4 sm:px-0 sm:w-2/3 flex flex-col justify-center items-center py-4 transition-colors duration-400 ">
        <div className="w-full flex justify-between items-center transition-colors duration-400 mb-5 md:mb-15">
          <button
            className="box-button flex justify-center items-center"
            onClick={() => navigate(-1)}
          >
            <MdArrowBackIos />
            BACK
          </button>
          <div className="flex justify-center items-center gap-3">
            <a
              className="box-button"
              href={work.github}
              target="_blank"
              rel="noreferrer"
            >
              {viewcode}
            </a>
            {work.demo && (
              <a
                className="box-button"
                href={work.demo}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
        <div className="w-full text-gray-700 dark:text-white ">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 md:mb-5 transition-colors duration-400 first-letter:uppercase">
            {work.name}
          </h1>
          <h3 className="text-xs md:text-lg font-bold mb-3 md:mb-5 transition-colors duration-400 first-letter:uppercase">
            {work.postsition}
          </h3>
          <div className="w-full mb-5 md:mb-10 transition-colors duration-400">
            <img
              src={images[work.image]}
              alt=""
              className="w-full rounded-xl "
            />
          </div>
          <h1 className="text-3xl font-bold mb-5 md:mb-8 transition-colors duration-400">
            Project Overview
          </h1>
          <p className="text-xs md:text-lg mb-6 md:mb-10 transition-colors duration-400 first-letter:uppercase">
            {work.framwork}
          </p>
          <p className="text-xs md:text-lg mb-5 md:mb-10 transition-colors duration-400 first-letter:uppercase">
            {work.description}
          </p>
          <h1 className="text-3xl font-bold mt-8 transition-colors duration-400 mb-2">
            Techniology Stack
          </h1>
          <div className="md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-10 ">
            {Object.entries(work.technilogy).map(([key, value], index) => (
              <div
                key={key}
                className="box mt-4 text-gray-700 dark:text-white cursor-default"
              >
                <div className="flex flex-col justify-start ">
                  <p className="text-lg mb-2 font-bold transition-colors duration-400 first-letter:uppercase">
                    {value.name}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-3">
                    {Object.entries(value.tools).map(([toolKey, tool]) => (
                      <p
                        key={toolKey}
                        className="bg-yellow-400 text-white rounded-lg border px-2 py-1 text-center first-letter:uppercase"
                      >
                        {tool.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h1 className="text-3xl font-bold transition-colors duration-400 mb-2">
            Key Features
          </h1>
          <div className="md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {Object.entries(work?.key_Feature || {}).map(
              ([key, value], index) => (
                <div
                  key={index}
                  className="box mt-4 text-gray-700 dark:text-white cursor-default"
                >
                  <div className="flex justify-start">
                    <div className="flex justify-center items-start mr-4">
                      <p className="size-10 flex justify-center items-center rounded-full bg-yellow-400 text-white text-lg font-bold transition-colors duration-400">
                        {1 + index}
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
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workdetail;
