import { FaRegCheckCircle } from "react-icons/fa";
function About (){
    return (
      <section className="py-16 bg-gray-100 text-gray-800 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-gray-300">Sobre Mim</h2>
        <p className="text-lg leading-relaxed mb-4 dark:text-gray-300">
          Olá! Sou o Hallysson Mateus, sou engenheiro de automação que fiz transição para Desenvolvedor Web Full Stack com foco em tecnologias C#(.NET), Javascript, React.js. Minha jornada profissional é guiada em criar soluções impactantes e entregar valor através da tecnologia.
        </p>
        <p className="text-lg leading-relaxed dark:text-gray-300">
          Como a maioria dos desenvolvedores, aprecio tomar café, gosto de assistir animes, filmes de ação/comédia/terror, séries, ir á academia, jogar games e apreciar com minha familia e amigos.
        </p>
      </div>

      <div className="container text-left px-40">
        <h3 className="text-2x1 font-bold mb-4 text-gray-900 dark:text-gray-300">Destaques Profissionais</h3>
        <ul className="space-y-4 text-gray-700">
          <li className="flex itens-center gap-2">
            <FaRegCheckCircle className="text-blue-600 text-lg"/>
            Experiência em desenvolvimento de aplicações com .NET, C# e SQL Server</li>
          <li className="flex itens-center gap-2">
            <FaRegCheckCircle className="text-blue-600 text-lg"/>
            Vivência com React, JavaScript, HTML5 e CSS3 no front-end</li>
          <li className="flex itens-center gap-2">
            <FaRegCheckCircle className="text-blue-600 text-lg"/>
            Conhecimentos em APIs REST, Git/GitHub, metodologias ágeis (Scrum/Kanban)</li>
          <li className="flex itens-center gap-2">
            <FaRegCheckCircle className="text-blue-600 text-lg"/>
            Foco em aprendizado contínuo, análise de problemas e desenvolvimento de soluções eficientes</li>
        </ul>
      </div>
    </section>  
    )
}

export default About