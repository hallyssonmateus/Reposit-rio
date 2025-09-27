import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects (){
    const projectList = [
        {
            title: 'Site de Viagens',
            subtitle: 'Site completo para pequenas e médias empresas',
            description: "Responsável pelo desenvolvimento das páginas “Quem Somos” e “Contato” do site de viagens, aplicando conceitos de usabilidade e design responsivo.",
            image: '/Projeto01.PNG',
            github: 'https://github.com/vianabsouza/destinos-incriveis',
            live: 'https://destinos-incriveis.vercel.app/',
            techs: ['HTML', 'CSS', 'JavaScript', 'Figma','GitHub', '+2 mais']
        },
        {
            title: 'API de Sistema de Pizzaria',
            subtitle: 'RESTful API robusta para sistema de pizzaria',
            description: 'API completa para um sistema de pedidos para pizzaria. Estruturação da aplicação em .NET Core 8.0 utilizando arquitetura em camadas (MVC).',
            image: '/Projeto02.PNG',
            github: 'https://github.com/hallyssonmateus/Simulador9_Sist_Pizzaria',
            live: '',
            techs: ['C#', 'ASP.NET Web API', 'SQL Server', 'JWT', '+1 mais']
        },
        {
            title: 'Simulador de Seguro Web',
            subtitle: 'Simulador de seguros online para cálculo de apólices e planos personalizados. ',
            description: 'API completa para um sistema de pedidos para pizzaria. Estruturação da aplicação em .NET Core 8.0 utilizando arquitetura em camadas (MVC).',
            image: '/Projeto03.PNG',
            github: 'https://github.com/hallyssonmateus/Projeto_AspNet_Framework',
            live: '',
            techs: ['C#', 'ASP.NET Web Forms', 'HTML', 'CSS','GitHub', '+1 mais']
        },
        {
            title: 'Simulador Controle Financeiro',
            subtitle: 'Em desenvolvimento',
            description: 'Uma aplicação web para gerenciar e visualizar finanças pessoais. Permitindo registrar receitas, despesas e investimentos; Gerar relatórios e gráficos; Acompanhar saldo e evolução mensal.',
            image: '/Projeto04.png',
            github: 'https://github.com/hallyssonmateus/Sist_Controle_Financeiro',
            live: 'https://projeto2.com',
            techs: ['C#', 'ASP.NET Web API', 'Sql Server', 'Tailwind CSS','GitHub', '+1 mais']
        }
    ];

    return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl text-gray-600 dark:text-gray-300 text-bold text-center mb-4">Projetos em Destaque</h2>
                <p className="text-gray-600 text-center mb-12 dark:text-gray-300">
                    Alguns dos projetos que desenvolvi, demonstrando expertise em diferentes tecnologias e soluções
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectList.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                            <div className="relative">
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                                <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                    Destaque
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                                <p className="text-blue-600 text-sm mb-2">{project.subtitle}</p>
                                <p className="text-gray-700 mb-4">{project.description}</p>

                                {/* Tags de tecnologias */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techs.map((tech, i) => (
                                        <span key={i} className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex space-x-6 text-sm">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-purple-600 transition">
                                        <FaGithub className="mr-1" /> Código
                                    </a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-purple-600 transition">
                                        <FaExternalLinkAlt className="mr-1" /> Demo
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