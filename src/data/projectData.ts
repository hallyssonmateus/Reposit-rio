import type { Project } from "../types/project";

export const projectList: Project[] = [
    {
        id: 1,
        title: 'Site de Viagens',
        subtitle: 'Site completo para pequenas e médias empresas',
        description: "Responsável pelo desenvolvimento das páginas “Quem Somos” e “Contato” do site de viagens, aplicando conceitos de usabilidade e design responsivo.",
        image: '/Projeto01.PNG',
        github: 'https://github.com/vianabsouza/destinos-incriveis',
        live: 'https://destinos-incriveis.vercel.app/',
        techs: ['HTML', 'CSS', 'JavaScript', 'Figma', 'GitHub', '+2 mais']
    },
    {
        id: 2,
        title: 'API de Sistema de Pizzaria',
        subtitle: 'RESTful API robusta para sistema de pizzaria',
        description: 'API completa para um sistema de pedidos para pizzaria. Estruturação da aplicação em .NET Core 8.0 utilizando arquitetura em camadas (MVC).',
        image: '/Projeto02.PNG',
        github: 'https://github.com/hallyssonmateus/Simulador9_Sist_Pizzaria',
        live: '',
        techs: ['C#', 'ASP.NET Web API', 'SQL Server', 'JWT', '+1 mais']
    },
    {
        id: 3,
        title: 'Simulador de Seguro Web',
        subtitle: 'Simulador de seguros online para cálculo de apólices e planos personalizados. ',
        description: 'API completa para um sistema de pedidos para pizzaria. Estruturação da aplicação em .NET Core 8.0 utilizando arquitetura em camadas (MVC).',
        image: '/Projeto03.PNG',
        github: 'https://github.com/hallyssonmateus/Projeto_AspNet_Framework',
        live: '',
        techs: ['C#', 'ASP.NET Web Forms', 'HTML', 'CSS', 'GitHub', '+1 mais']
    },
    {
        id: 4,
        title: 'Simulador Controle Financeiro',
        subtitle: 'Em desenvolvimento',
        description: 'Uma aplicação web para gerenciar e visualizar finanças pessoais. Permitindo registrar receitas, despesas e investimentos; Gerar relatórios e gráficos; Acompanhar saldo e evolução mensal.',
        image: '/Projeto04.png',
        github: 'https://github.com/hallyssonmateus/Sist_Controle_Financeiro',
        live: 'https://projeto2.com',
        techs: ['C#', 'ASP.NET Web API', 'Sql Server', 'Tailwind CSS', 'GitHub', '+1 mais']
    }
]