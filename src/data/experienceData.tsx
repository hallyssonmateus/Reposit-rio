import type { Experience } from "../types/experience";

export const experienceData: Experience[] = [
  {
    id:1,
    title: 'Desenvolvedor Full Stack Jr',
    company: 'Télos conecta',
    period: 'jul/2024 - fev/2025',
    location: 'São Paulo, SP',
    description: '',
    achievements: [
      'Realizei análise, projeto e desenvolvimento de aplicações web utilizando a linguagem C# e os frameworks .NET Framework/Core.',
      'Colaborei com a equipe para projetar e implementar soluções eficientes, com destaque para a arquitetura de APIs RESTful.',
      'Integrei sistemas com banco de dados SQL Server, modelando o banco de dados e escrevendo consultas otimizadas para garantir a integridade dos dados.',
      'Participei de reuniões técnicas para levantamento de requisitos e discussão de melhorias em projetos existentes.',
      'Realizei testes unitários (xUnit/NUnit) e depuração de código para garantir a qualidade das entregas.',
      'Utilizei GIT/GitHub para controle de versão em todos os projetos.'
    ],
    technologies: ['C#', '.NET Core', 'Entity Framework', 'React', 'SQL Server','Api REST', 'xUnit']
  },
  {
    id: 2,
    title: 'Desenvolvedor Frontend Web Jr',
    company: 'Proz Educação',
    period: 'abr/2024 - out/2024',
    location: 'São Paulo, SP',
    description: '',
    achievements: [
      'Colaborei no desenvolvimento de um projeto em equipe, utilizando HTML5, CSS3, e JavaScript em diversas funcionalidades.',
      'Apliquei conceitos de banco de dados relacional e boas práticas de desenvolvimento.',
      'Contribuí ativamente na revisão de código e na resolução de bugs, compartilhando conhecimentos e experiências com os colegas.',
      'Participei ativamente de rituais ágeis (Scrum/Kanban) e utilizei Git/GitHub para o desenvolvimento colaborativo.',
      'Realizei testes unitários (xUnit/NUnit) e depuração de código para garantir a qualidade das entregas.',
      'Utilizei GIT/GitHub para controle de versão em todos os projetos.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Figma', 'Scrum','Kanban','Python','MySQL']
  }

];