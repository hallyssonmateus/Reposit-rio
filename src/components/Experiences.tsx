import { experienceData } from "../data/experienceData"
import ExperienceItem from "./ExperienceItem"


function Experiences (){
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto text-center px-4">
                <div>
                    <h2 className="text-3x1 text-gray-600 font-bold mb-2">Experiência Profissional</h2>
                    <p className="text-gray-600">Minha trajetória profissional e evolução técnica ao longo dos anos</p>
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