import { MapPin } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-100 dark:bg-gray-900 text-gray-900 dark:text-white transition">
      <div className="w-10/12 block sm:flex justify-center ">
        <div className="w-full sm:w-1/2 sm:flex flex-col justify-center items-center">
          <h1 className="max-w-xl text-2xl sm:text-6xl font-bold text-gray-700 dark:text-gray-300">
            About me
          </h1>
          <p className="sm:text-xl sm:max-w-xl p-4">
            I am a passionate and active developer who enjoys building
            functional, efficient applications. I love solving problems,
            learning new programming concepts, and exploring modern
            technologies. With attention to detail and a commitment to clean
            code, I’m eager to contribute to projects, grow with a team, and
            take on new challenges.
          </p>
          <div className="flex sm:text-xl p-4 space-x-1">
            <MapPin size={30} />
            <p>Khsetr Commune, Kampong Rou District, Svay Rieng Province </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 sm:flex flex-col justify-center items-center">
          <h1 className="max-w-xl text-2xl sm:text-6xl font-bold text-gray-700 dark:text-gray-300">
            Education
          </h1>
          <div className="w-full flex flex-col space-y-4 justify-center items-center py-4">
            <div className="box sm:w-2/3 flex items-center">
              <div className="w-48">
                <img
                  className="w-full h-full rounded-xl border-4 border-gray-100 dark:border-gray-900"
                  src="https://erasmusplusfriends.eu/wp-content/uploads/2019/05/SRU_LOGO_compressed-1024x1024.png"
                  alt=""
                />
              </div>
              <p className="ml-5 text-3xl font-bold text-gray-700 dark:text-gray-300">Svay Rieng University </p>
            </div>
            <div className="box sm:w-2/3 flex items-center ">
              <div className=" w-48">
                <img
                  src="https://erasmusplusfriends.eu/wp-content/uploads/2019/05/SRU_LOGO_compressed-1024x1024.png"
                  alt=""
                />
              </div>
              <p className="ml-5 text-3xl font-bold text-gray-700 dark:text-gray-300">Kampong Rou High School</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
