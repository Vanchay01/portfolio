import { MapPin } from "lucide-react";
import sru from "../../assets/SRU_LOGO.png"
import kpr from "../../assets/kpr-high-school.jpg"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-100 dark:bg-gray-900 text-gray-900 dark:text-white transition">
      <div className="w-full max-w-7xl px-4 block sm:flex justify-center ">
        <div className="w-full sm:w-1/2 sm:flex flex-col justify-center items-center">
          <h1 className="max-w-xl text-2xl sm:text-6xl font-bold text-gray-700 dark:text-gray-300">
            About me
          </h1>
          <p className="sm:text-xl py-5 md:px-5">
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
          <div className="w-full flex flex-col space-y-4 justify-center items-center py-5 md:px-5">
            <Link to="/sru" className="box border w-full flex items-center ">
              <img
                className="size-35 rounded-full"
                src={sru}
                alt="SRU"
              />
              <div className="ml-6 text-gray-700 dark:text-gray-300">
                <p className="text-xl font-semibold mb-2">
                  Svay Rieng University
                </p>
                <p className="text-sm ">Computer Science</p>
                <p className="text-sm ">GPA: 3.49</p>
                <p className="text-sm ">2020-2024</p>
              </div>
            </Link>
            <Link to="/kpr" className="box border w-full flex items-center ">
              <img
                className="size-35 rounded-full"
                src={kpr}
                alt="Kampong Rou High Schoolz"
              />
              <div className="ml-6 text-gray-700 dark:text-gray-300">
                <p className="text-xl font-semibold mb-2">
                  Kampong Rou High School
                </p>
                <p className="text-sm ">2020</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
