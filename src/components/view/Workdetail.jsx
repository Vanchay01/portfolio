import React from "react";
import { useNavigate } from "react-router-dom";

const Workdetail = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 flex justify-center py-6 transition-colors duration-300">
      <div className="w-full max-w-7xl px-4 py-16 transition-colors duration-300">
        <button className="box" onClick={()=> navigate(-1)}>Back</button>
        <div className="bg-amber-300 w-full "></div>
      </div>
    </div>
  );
};

export default Workdetail;
