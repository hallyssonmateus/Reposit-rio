import { FaReact, FaHtml5, FaJs, FaGithub, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap,  SiDotnet,  SiPostman} from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";
import { DiVisualstudio, DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { MdOutlineApi } from "react-icons/md";
import { PiStackFill } from "react-icons/pi";

type SkillCardProps = {
  icon: JSX.Element;
  name: string;
};

function SkillCard({icon, name}: SkillCardProps){
    return (
        <div className='bg-white rounded-xl p-6 flex flex-col items-center shadow-sm hover:shadow-md transition duration-300'>
            <div className="text-blue-600">{icon}</div>
            <p className="font-medium mt-2 text-gray-800">{name}</p>
        </div>
    )
}


function Skills (){

    const backend = [
    { name: "C#", icon: <TbBrandCSharp size={40} /> },
    { name: ".NET Core/.NET Framework", icon: <SiDotnet size={40} /> },
    { name: "ASP.NET Web API", icon: <MdOutlineApi size={40} /> },
    { name: "Entity Framework", icon: <PiStackFill size={40} /> },
    { name: "SQL Server", icon: <DiMsqlServer size={40} /> },
  ];
  const frontend = [
    { name: "React", icon: <FaReact size={40} /> },
    { name: "JavaScript/TypeScript", icon: <FaJs size={40} /> },
    { name: "HTML5/CSS3", icon: <FaHtml5 size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    { name: "Bootstrap", icon: <SiBootstrap size={40} /> },
  ];
  const tools = [
    { name: "Git/GitHub", icon: <FaGithub size={40} /> },
    { name: "Azure DevOps", icon: <VscAzure size={40} /> },
    { name: "Docker", icon: <FaDocker size={40} /> },
    { name: "Postman", icon: <SiPostman size={40} /> },
    { name: "Visual Studio", icon: <DiVisualstudio size={40} /> },
  ];

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-8">Habilidades Técnicas</h2>
                <p>Tecnologias e ferramentas que domino para criar soluções robustas e escaláveis.</p>

                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Backend</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
                {backend.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                ))}
                </div>

                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Frontend</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
                {frontend.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                ))}
                </div>

                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Ferramentas</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {tools.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                ))}
                </div>

            </div>
        </section>
    )
}

export default Skills