import { experienceData } from "../data/experienceData"
import ExperienceItem from "./ExperienceItem"


function Experiences (){
    return (
        <section id="experience" className="bg-gray-100 dark:bg-gray-900 py-16">
            <div className="container mx-auto text-center px-4">
                <div>
                    <h2 className="text-3xl text-gray-600 dark:text-gray-300 text-bold text-center mb-4">Experiência Profissional</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-12">Minha trajetória profissional e evolução técnica ao longo dos anos</p>
                </div>
                
                <div className="relative">
                    {experienceData.map((experience, index) => (
                        <ExperienceItem key={index} experience={experience} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experiences;