import React from "react";

interface ExperienceItemProps {
    experience: {
        title: string;
        company: string;
        period: string;
        location: string;
        description: string;
        achievements: string[];
        tecnologies: string[];
    };
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({experience}) => {
    return (
        <div className="relative border-l-2 border-gray-200 pl-8 pb-12">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0">
                <h3 className="text-xl font-bold text-gray-800">{experience.title}</h3>
                <p className="text-lg text-blue-600 mb-2">{experience.company}</p>
            </div>
        </div>
    )
};

export default ExperienceItem