import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import kpr from "../../assets/kpr.png";
import kprlogo from "../../assets/kpr-high-school.jpg"

const EducationKPR = () => {
  const View = "</> Code";
  const navigate = useNavigate();
  return (
    <div className=" bg-slate-100 dark:bg-gray-900 transition-colors duration-400 flex flex-col items-center">
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
          <div className="w-full md:w-10/12 md:flex flex-col items-center mx-auto my-5 space-y-6">
            <img src={kprlogo} alt="" />
            <h1 className="mb-6 text-2xl sm:text-4xl font-bold text-gray-700 dark:text-gray-300">
              Kampong Rou High School
            </h1>
            <img
              className="w-full border-2 border-amber-50 rounded-lg"
              src={kpr}
              alt="Certificate of Kampong Rou High School"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationKPR;
