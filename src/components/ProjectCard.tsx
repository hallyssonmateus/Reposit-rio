import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from '../types/project';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
    const { title, subtitle, description, image, github, live, techs } = project;

    // Função que qerifica se o link "Demo" deve ser desabilitado
    const isLiveLinkAvailable = !!live;

    const renderLink = (url: string, icon: React.ReactNode, label: string, isAvailable: boolean) => {
        const baseClasses = "flex items-center text-sm transition";
        const linkClasses = isAvailable
            ? "text-gray-700 hover:text-purple-600"
            : "text-gray-400 cursor-not-allowed";

        return (
            <a 
                href={isAvailable ? url : undefined} // undefined para desabilitar o link se não estiver disponível
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${baseClasses} ${linkClasses}`}
                onClick={(e) => !isAvailable && e.preventDefault()} // Previne navegação se não estiver disponível
            >
                {icon} {label}
            </a>
        );
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="relative">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    Destaque
                </span>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-1 dark:text-gray-200">{title}</h3>
                <p className="text-blue-600 text-sm mb-2">{subtitle}</p>
                <p className="text-gray-700 dark:text-gray-400 mb-4">{description}</p>

                {/* Tags de tecnologias */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {techs.map((tech) => (
                        <span 
                            key={tech} 
                            className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links usando a função auxiliar para clareza */}
                <div className="flex space-x-6">
                    {renderLink(github, <FaGithub className="mr-1" />, 'Código', true)}
                    {renderLink(live, <FaExternalLinkAlt className="mr-1" />, 'Aplicação', isLiveLinkAvailable)}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;