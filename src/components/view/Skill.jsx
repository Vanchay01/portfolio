import { Mail, Phone } from "lucide-react";
import React from "react";
import skill from "../../json/skillJson.json";

const Skill = () => {
  return (
    <div className=" w-full bg-gray-100 dark:bg-gray-900 flex justify-center py-6 transition-all duration-300">
      <div className="w-full max-w-7xl px-4 pt-16 transition-colors duration-300">
        <h1 className="mb-6 text-2xl sm:text-6xl font-bold text-gray-700 dark:text-gray-300">
          Skills
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 transition-all duration-300">
          {skill.map((s) => (
            <div key={s.id} className="box-skill font-medium">
              <div className="flex items-center">
                <img
                  className="size-6 mr-2"
                  src={s.image}
                  alt=""
                />
                <p>{s.name}</p>
              </div>
              {/* Light Saber */}
              <div className="w-full max-w-xs mt-2 py-2 transition-all duration-300">
                <div className="h-3 w-full bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden relative transition-all duration-300">
                  <div
                    className="absolute top-0 left-0 h-full rounded-full blur-sm bg-yellow-500 "
                    style={{ width: `${s.rating}%` }}
                  />
                  <div
                    className="absolute top-0 left-0 h-full rounded-full bg-yellow-400"
                    style={{ width: `${s.rating}%` }}
                  />
                </div>
                <p className="mt-2 text-sm text-yellow-500 text-right">{s.rating}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
