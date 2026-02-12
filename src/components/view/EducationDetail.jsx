import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import transcript from "../../assets/Transcript.jpg";
import certificate from "../../assets/Certificate.png";
import sru from "../../assets/SRU_LOGO.png";

const EducationDetail = () => {
  const View = "</> Code";
  const navigate = useNavigate();
  return (
    <div className="overflow-clip bg-slate-100 dark:bg-gray-900 transition-colors duration-400 flex flex-col items-center">
      <div className=" w-full sm:w-2/3 bg-gray-100 dark:bg-gray-900 flex justify-center py-4 transition-colors duration-400 ">
        <div className="w-full max-w-7xl px-4 transition-colors duration-400 ">
          <div className="flex justify-between items-center pb-4">
            <button
              className="box-skill flex justify-center items-center"
              onClick={() => navigate(-1)}
            >
              <MdArrowBackIos />
              BACK
            </button>
            {/* <a className="box-skill" href="https://github.com/Vanchay01/portfolio">
              {View}
            </a> */}
          </div>
          <div className="w-full md:w-10/12 md:flex flex-col items-center mx-auto space-y-6 text-gray-700 dark:text-gray-300">
            <div className="flex flex-col justify-center items-center">
              <img src={sru} alt="" className="size-40 rounded-full mt-5" />
              <h1 className="text-2xl sm:text-4xl font-bold md:mt-2 text-center">
                Svay Rieng University
              </h1>
              <p className="font-bold text-sm md:mt-5">2020-2024</p>
            </div>
            <img
              className="w-full border-2 border-amber-50 rounded-lg"
              src={certificate}
              alt="Certificate"
            />
            <img
              className="w-full border-2 border-amber-50 rounded-lg"
              src={transcript}
              alt="Transcript"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetail;
