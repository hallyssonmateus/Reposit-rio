import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

function Skills (){

    const skills = [
        { name: 'React', icon: <FaReact size={40} className="text-blue-500" /> },
        { name: 'TypeScript', icon: <SiTypescript size={40} className="text-blue-700" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-teal-400" /> },
        { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-400" /> },
        { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-600" /> },
        { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-600" /> },
        { name: 'GitHub', icon: <FaGithub size={40} className="text-gray-800" /> },
    ];

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-8">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 transition transform duration-300"
                        >
                            {skill.icon}
                            <p className="font-semibold mt-2">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills