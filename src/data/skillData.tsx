import { FaReact, FaHtml5, FaJs, FaGithub, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap,  SiDotnet,  SiPostman} from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";
import { DiVisualstudio, DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { MdOutlineApi } from "react-icons/md";
import { PiStackFill } from "react-icons/pi";
import type { SkillCategory } from '../types/skills';

const ICON_SIZE = 40;

export const SkillCategories: SkillCategory[] = [
    {
        title: "Backend",
        skills: [
            { keyName: "C#", name: "C#", icon: <TbBrandCSharp size={ICON_SIZE} /> },
            {keyName: ".Net Core", name: <><span className='text-sm'>.Net Core</span><br /><span className='text-sm'>.Net Framework</span></>, icon: <SiDotnet size={ICON_SIZE} /> },
            {keyName: "ASP.NET Web API", name: "ASP.NET Web API", icon: <MdOutlineApi size={ICON_SIZE} /> },
            {keyName: "Entity Framework", name: "Entity Framework", icon: <PiStackFill size={ICON_SIZE} /> },
            {keyName: "SQL Server", name: "SQL Server", icon: <DiMsqlServer size={ICON_SIZE} /> },
        ]
    },
    {
        title: "Frontend",
        skills: [
            {keyName: "React", name: "React", icon: <FaReact size={ICON_SIZE} /> },
            {keyName: "JavaScript", name: <><span className='text-sm'>JavaScript</span><br /><span className='text-sm'>TypeScript</span></>, icon: <FaJs size={ICON_SIZE} /> },
            {keyName: "HTML5", name: <><span className='text-sm'>HTML5</span><br /><span className='text-sm'>CSS3</span></>, icon: <FaHtml5 size={ICON_SIZE} /> },
            {keyName: "Tailwind CSS", name: "Tailwind CSS", icon: <SiTailwindcss size={ICON_SIZE} /> },
            {keyName: "Bootstrap", name: "Bootstrap", icon: <SiBootstrap size={ICON_SIZE} /> },
        ]
    },
    {
        title: "Ferramentas",
        skills: [
            {keyName: "Git", name: <><span className='text-sm'>Git</span><br /><span className='text-sm'>GitHub</span></>, icon: <FaGithub size={ICON_SIZE} /> },
            {keyName: "Azure DevOps", name: "Azure DevOps", icon: <VscAzure size={ICON_SIZE} /> },
            {keyName: "Docker", name: "Docker", icon: <FaDocker size={ICON_SIZE} /> },
            {keyName: "Postman", name: "Postman", icon: <SiPostman size={ICON_SIZE} /> },
            {keyName: "Visual Studio", name: "Visual Studio", icon: <DiVisualstudio size={ICON_SIZE} /> },
        ]
    },
];