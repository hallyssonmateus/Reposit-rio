export interface Experience {
  id?: number | string; // Adicionando um ID para melhor key no React
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}