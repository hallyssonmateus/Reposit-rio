import { projectList } from "../data/projectData";
import ProjectCard from "./ProjectCard";

function Projects (){
    return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                {/* Headers da Seção */}
                <h2 className="text-3xl text-gray-600 dark:text-gray-300 text-bold text-center mb-4">Projetos em Destaque</h2>
                <p className="text-gray-600 text-center mb-12 dark:text-gray-300">
                    Alguns dos projetos que desenvolvi, demonstrando expertise em diferentes tecnologias e soluções
                </p>

                {/* Container dos Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectList.map((project) => (
                        <ProjectCard 
                                key={project.id}
                                project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects