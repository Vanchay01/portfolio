import { article } from "framer-motion/client";
import React from "react";
import InputSkill from "./Input_Form/InputSkill";

const ProfilePage = () => {
  return (
    <article className="overflow-hidden bg-slate-100  dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors duration-400 flex flex-col items-center">
      <div className="md:flex h-screen justify-center w-full md:max-w-7xl px-4  flex-col items-center transition-colors duration-400 ">
        <h1 className="text-4xl">Private Site</h1>
        <p className="text-xl">
          This site is currently private. If you’re the owner or contributor
        </p>
        <InputSkill />
      </div>
    </article>
  );
};

export default ProfilePage;
