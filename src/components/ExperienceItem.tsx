import React from "react";

interface ExperienceItemProps {
    experience: {
        title: string;
        company: string;
        period: string;
        location: string;
        description: string;
        achievements: string[];
        technologies: string[];
    };
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({experience}) => {
    return (
        <div className="relative border-l-2 border-gray-200 pl-8 pb-12">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0" />

                <h3 className="text-xl font-bold text-gray-800 text-left">{experience.title}</h3>
                <p className="text-lg text-blue-600 mb-2 text-left">{experience.company}</p>

                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{experience.period}</span>
                    <span>{experience.location}</span>
                </div>

                <p className="text-gray-700 leading-relaxed  mb-4">{experience.description}</p>

                <h4 className="font-semi-bold tex-gray-700 mb-2 text-left">Principais Conquistas:</h4>
                <ul className="list-none ml-0">
                    {experience.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start text-gray-600 mb-1">
                            <span className="text-blue-500 mr-2">•</span>{achievement}
                        </li>
                    ))}
                </ul>

                <h4 className="font-semibold text-gray-700 mt-4 mb-2 text-left">Tecnologias:</h4>
                <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) =>(
                        <span key={index} className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">{tech}</span>
                    ))}
                </div>

        </div>
    )
};

export default ExperienceItem