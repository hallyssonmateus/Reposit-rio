import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


function Contact (){
    return (
        <section className="py-20 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6 dark:text-gray-300">Entre em Contato</h2>
                <p className="mb-8 text-lg dark:text-gray-300">Sinta-se à vontade para me chamar nas redes abaixo!</p>
                <div className="flex justify-center space-x-6">
                    <a href="https://github.com/hallyssonmateus" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 dark:text-gray-300">
                        <FaGithub size={40} />
                    </a>
                    <a href="https://www.linkedin.com/in/hallysson-mateus-santos-assun%C3%A7%C3%A3o/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 dark:text-gray-300">
                        <FaLinkedin size={40} />
                    </a>
                    <a href="mailto:seu-email@gmail.com" className="hover:text-gray-300 dark:text-gray-300">
                        <FaEnvelope size={40} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact