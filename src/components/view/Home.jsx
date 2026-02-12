import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaCloudDownloadAlt,
  FaTelegram,
} from "react-icons/fa";
import profile from "../../upload/image/Profile-removebg-preview.png";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Home = () => {
    const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="overflow-hidden h-screen flex flex-col justify-center items-center bg-slate-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
      <div className="w-full max-w-7xl px-4 flex justify-center items-center">
        <div className="w-full sm:w-1/2 sm:flex flex-col items-center justify-center ">
          <div className={`max-w-xl text-4xl sm:text-6xl font-bold text-gray-700 dark:text-gray-300 transition-all duration-700
            ${inView
              ? "translate-x-0 opacity-100"
              : "translate-x-[-160px] opacity-0"
            }`}>
            Hi,
            <br /> I'm [
            <span
              ref={ref}
              className={`text-green-600 dark:text-green-500`}
            >
              MEAS VANCHAY
            </span>
            ]. <br />
            I'm {""}
            <span className="text-cyan-600 dark:text-cyan-500">
              React
            </span> &{" "}
            <span className="text-yellow-500 dark:text-yellow-400">
              Express
            </span>{" "}
            <br />
            Developer. <br />{" "}
            <div className="flex items-center py-4 space-x-4">
              <a
                className="hover:scale-130 transition duration-75"
                href="https://www.linkedin.com/in/meas-vanchay-9799b036a/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={37} color="#FFD803" />
              </a>
              <a
                className="hover:scale-130 transition duration-75"
                href="https://www.facebook.com/vanchay.21/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook size={37} color="#FFD803" />
              </a>
              <a
                className="hover:scale-130 transition duration-75"
                href="https://github.com/Vanchay01"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={37} color="#FFD803" />
              </a>
              <a
                className="hover:scale-130 transition duration-75 "
                href="https://t.me/vanchayyy"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegram size={37} color="#FFD803" />
              </a>
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/CV Resume-Meas Vanchay.pdf";
                  link.download = "CV Resume-Meas Vanchay.pdf";
                  link.click();
                }}
                className="flex justify-center items-center bg-yellow-400 h-10 gap-2 px-4 text-base md:text-xl rounded-full cursor-pointer text-white dark:text-gray-900 hover:scale-110 transition duration-75"
              >
                <FaCloudDownloadAlt /> Resume
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 hidden sm:flex items-center justify-center ">
          <img
            src={profile}
            alt=""
            className={`bg-yellow-400 w-72 rounded-full border-4 border-gray-900 dark:border-gray-100 transition-all duration-700
              ${inView
                ? "translate-x-0 opacity-100"
                : "translate-x-40 opacity-0"
              }`}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
