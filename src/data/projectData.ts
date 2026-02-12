import type { Project } from "../types/project";

export const projectList: Project[] = [
    {
        id: 1,
        title: 'Sistemas de Cadastro de Clientes',
        subtitle: 'Sistema de cadastro de clientes com dashboard administrativo',
        description: 'Aplicação web e responsiva de um CRUD de clientes, utilizando React e Tailwind CSS no frontend consumindo uma Api externa de clientes com versão em Dashboard para administração, além de uma seção de clientes selecionados.',
        image: '/Projeto05.PNG',
        github: 'https://github.com/hallyssonmateus/Sist_Cadas_Usuarios-React-',
        live: 'https://sist-cadas-usuarios-react.vercel.app/',
        techs: ['React', 'Tailwind CSS', 'API REST', 'Responsivo', 'CRUD', 'Figma', 'Componentização']
    },
    {
        id: 2,
        title: 'Sistema de Gerenciamente de Leads - CRM',
        subtitle: 'Sistema de gerenciamento de leads para otimização de vendas',
        description: 'Aplicação web para captação e organização de leads, com validação de formulários em React, consumo de APIs REST, layout responsivo e exibição estruturada das informações. O projeto proporcionou melhor organização dos dados, redução de erros de cadastro e melhoria na experiência do usuário.',
        image: '/Projeto06.PNG',
        github: 'https://github.com/hallyssonmateus/Leads_Tasks_Project',
        live: 'https://leads-tasks-project.vercel.app/',
        techs: ['React', 'Tailwind CSS', 'API REST', 'Responsivo', 'Validação de dados', 'Componentização']
    },
    {
        id: 3,
        title: 'Site de Viagens',
        subtitle: 'Site completo de viagens para pequenas e médias empresas',
        description: "Responsável pelo desenvolvimento das páginas “Quem Somos” e “Contato” do site de viagens, aplicando conceitos de usabilidade e design responsivo.",
        image: '/Projeto01.PNG',
        github: 'https://github.com/vianabsouza/destinos-incriveis',
        live: 'https://destinos-incriveis.vercel.app/',
        techs: ['HTML', 'CSS', 'JavaScript', 'Figma', 'GitHub', 'Trabalho em Equipe', 'Scrum', 'Kanban']
    },
    {
        id: 4,
        title: 'API de Sistema de Pizzaria',
        subtitle: 'RESTful API robusta para sistema de pizzaria',
        description: 'API completa para um sistema de pedidos para pizzaria. Estruturação da aplicação em .NET Core 8.0 utilizando arquitetura em camadas (MVC).',
        image: '/Projeto02.PNG',
        github: 'https://github.com/hallyssonmateus/Simulador9_Sist_Pizzaria',
        live: '',
        techs: ['C#', 'ASP.NET Web API', 'SQL Server', 'Autenticação JWT', 'API REST', 'Swagger']
    }
]