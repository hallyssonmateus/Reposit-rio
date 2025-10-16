import { SkillCategories } from "../data/skillData";
import SkillItem from "./SkillItem";


function Skills (){

    return (
        <section id="skills" className="bg-gray-100 py-16 dark:bg-gray-900">
            <div className="container mx-auto text-center px-4">
                {/* Cabeçalho da Seção */}
                <h2 className="text-3xl text-gray-600 dark:text-gray-300 font-semibold text-center mb-4">Habilidades Técnicas</h2>
                <p className="text-gray-600 text-center mb-12 dark:text-gray-300">Tecnologias e ferramentas que domino para criar soluções robustas e escaláveis.</p>

                {/* Grid de Habilidades */}
                {SkillCategories.map((category) => (
                    <div key={category.title}>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-300">{category.title}</h3>
                    
                    <div className="grid grid-cols-2 items-center sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12 last:mb-0">
                        {category.skills.map((skill) => (
                            // Usa o componente SkillItem e o nome da skill como key
                            <SkillItem key={skill.keyName} skill={skill} />
                        ))}
                    </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills;