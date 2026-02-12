import { MapPin } from "lucide-react";
import sru from "../../assets/SRU_LOGO.png";
import kpr from "../../assets/kpr-high-school.jpg";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div className="overflow-clip py-6 md:h-screen flex flex-col justify-center items-center bg-slate-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-all duration-300">
      <div className="w-full max-w-7xl px-4 pt-16 block sm:flex justify-center ">
        <div
          ref={ref}
          className={` w-full sm:w-1/2 sm:flex flex-col justify-center items-center transition-all duration-700`}
        >
          <h1
            style={{ transitionDelay: "0ms" }}
            className={`max-w-xl text-2xl sm:text-6xl font-bold transition-all duration-700
              ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-400px]"}
              `}
          >
            About me
          </h1>
          <p
            style={{ transitionDelay: "100ms" }}
            className={`sm:text-xl py-5 md:px-5 text-justify transition-all duration-700
              ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-400px]"}
              `}
          >
            I am a passionate and active developer who enjoys building
            functional, efficient applications. I love solving problems,
            learning new programming concepts, and exploring modern
            technologies. With attention to detail and a commitment to clean
            code, I’m eager to contribute to projects, grow with a team, and
            take on new challenges.
          </p>
          <div
            style={{ transitionDelay: "200ms" }}
            className={`flex sm:text-xl p-4 space-x-1 transition-all duration-700
              ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-400px]"}
              `}
          >
            <MapPin size={30} color="#FFD803" />
            <p>Khsetr Commune, Kampong Rou District, Svay Rieng Province </p>
          </div>
        </div>
        <div
          ref={ref}
          className=" w-full sm:w-1/2 sm:flex flex-col justify-center items-center transition-all duration-300"
        >
          <h1
            style={{ transitionDelay: "0ms" }}
            className={`max-w-xl text-2xl sm:text-6xl font-bold text-gray-700 dark:text-gray-300 transition-all duration-700
              ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-96"}
            `}
          >
            Education
          </h1>
          <div className="overflow-hidden w-full flex flex-col space-y-4 justify-center items-center py-5 md:px-5">
            <Link
              style={{ transitionDelay: "100ms" }}
              to="/sru"
              className={`box border w-full flex items-center not-first:transition-all duration-700
              ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-96"}
              `}
            >
              <img className="size-35 rounded-full" src={sru} alt="SRU" />
              <div className="ml-6 text-gray-700 dark:text-gray-300">
                <p className="text-xl font-semibold mb-2">
                  Svay Rieng University
                </p>
                <p className="text-sm ">Computer Science</p>
                <p className="text-sm ">GPA: 3.49</p>
                <p className="text-sm ">2020-2024</p>
              </div>
            </Link>
            <Link
              style={{ transitionDelay: "200ms" }}
              to="/kpr"
              className={`box border w-full flex items-center not-first:transition-all duration-700
              ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-96"}
              `}
            >
              <img
                className="size-35 rounded-full"
                src={kpr}
                alt="Kampong Rou High Schoolz"
              />
              <div className="ml-6 text-gray-700 dark:text-gray-300 transition-all duration-300">
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
