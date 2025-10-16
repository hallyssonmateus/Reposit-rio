import React from "react";
import type { Skill } from "../types/skills";

interface SkillItemProps {
    skill: Skill;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
    return (
        <div key={skill.keyName} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 h-28 flex flex-col justify-center items-center text-center">
            <div className="text-blue-600 mb-2">{skill.icon}</div>
            <p className="font-medium mt-2 text-gray-800 dark:text-gray-300">{skill.name}</p>
        </div>
    );
};

export default SkillItem;