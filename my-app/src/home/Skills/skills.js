import React, { useState, useEffect } from "react";

const SkillBar = ({ skill, percentage }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillElement = document.getElementById(skill);
      if (skillElement) {
        const rect = skillElement.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [skill]);

  return (
    <div className="w-full max-w-md mx-auto my-4">
      <p className="text-lg font-bold mb-2">{skill}</p>
      <div className="w-full h-4 bg-gray-300 rounded-md overflow-hidden">
        <div
          id={skill}
          className={`h-4 bg-blue-500 transition-all duration-1000 ease-in-out ${
            visible ? `w-[${percentage}%]` : "w-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
