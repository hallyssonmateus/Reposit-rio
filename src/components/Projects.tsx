import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects (){
    const projectList = [
        {
            title: 'Projeto 1',
            description: 'O Spotiby é um projeto inovador que reimagina a experiência musical online, oferecendo uma plataforma envolvente e repleta de recursos para amantes da música. Foram utilizado o Bootstrap, HTML E CSS.',
            image: '/project1.png',
            github: 'https://github.com/seu-usuario/projeto1',
            live: 'https://projeto1.com'
        },
        {
            title: 'Projeto 2',
            description: 'Descrição breve do projeto 2, tenha calmaaa.',
            image: '/project2.png',
            github: 'https://github.com/seu-usuario/projeto2',
            live: 'https://projeto2.com'
        },
        {
            title: 'Projeto 3',
            description: 'Descrição breve do projeto 3.',
            image: '/project3.png',
            github: 'https://github.com/seu-usuario/projeto3',
            live: 'https://projeto3.com'
        },
    ];

    return (
    <section className="py-16 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl text-white text-bold text-center mb-12">Projetos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectList.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <div className="flex space-x-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-500">
                                        <FaGithub size={24} />
                                    </a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-500">
                                        <FaExternalLinkAlt size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects