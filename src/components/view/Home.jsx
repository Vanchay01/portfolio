import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../../upload/image/Profile-removebg-preview.png";
import linkedin from "../../upload/image/link-logo.webp";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-100 dark:bg-gray-900 text-gray-900 dark:text-white transition">
      <div className="w-10/12 flex justify-center items-center">
        <div className="w-full sm:w-1/2 sm:flex flex-col items-center justify-center ">
          <div className="max-w-xl text-4xl sm:text-6xl font-bold text-gray-700 dark:text-gray-300">
            Hi,
            <br /> I'm [
            <span className="text-green-600 dark:text-green-500">
              Meas Vanchay
            </span>
            ] <br />
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
                href="https://www.linkedin.com/in/meas-vanchay-9799b036a/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={37} color="#545397ff" />
              </a>
              <a
                href="https://www.facebook.com/vanchay.21/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook size={37} color="#545397ff" />
              </a>
              <a
                href="https://github.com/Vanchay01"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={37} color="#545397ff" />
              </a>
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/CV Resume-Meas Vanchay.pdf";
                  link.download = "CV Resume-Meas Vanchay.pdf";
                  link.click(); 
                }}
                className="bg-[#545397ff] h-12 px-4 text-base md:text-xl rounded-full cursor-pointer text-gray-100 dark:text-gray-100"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 hidden sm:flex items-center justify-center ">
          <img
            src={profile}
            alt=""
            className="dark:bg-gray-800 bg-white w-72 rounded-full border-4 border-gray-900 dark:border-gray-100 transition"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
