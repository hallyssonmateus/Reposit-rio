import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero (){
    return (
        <section className="flex flex-col md:flex-row items-center justify-center py-40 gap-12 bg-gray-100">
            {/* Foto Perfil */}
            <div className="flex-shrink-0">
                <img src="My_Photo.jpg" alt="Foto de perfil" className="w-48 h-48 rounded-full border-4 border-white shadow-md object-cover"></img>
            </div>

            {/* Conteudo */}
            <div className="text-center md: text-left">
                <h1 className="text-2xl font-bold text-gray-900">Hallysson Mateus</h1>
                <p className="text-lg text-gray-600 mt-1">Desenvolvedor Fullstack</p>
                <p className="text-gray-500 mt-1">Aprimorando habilidades em C#, .NET, React e SQL Server.</p>

                <div className="flex justify-center md:justify-start gap-4 mt-6">
                    <a href="https://github.com/hallyssonmateus" target="_blank" rel="noopener noreferrer"><FaGithub className="text-xl text-gray-800" /></a>
                    <a href="https://github.com/hallyssonmateus" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-xl text-gray-800" /></a>
                    <a href="https://github.com/hallyssonmateus" target="_blank" rel="noopener noreferrer"><FaEnvelope className="text-xl text-gray-800" /></a>
                </div>

                <div className="mt-8">
                    <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-blue-700 transition inline-flex items-center gap-2">Conhecer meu trabalho<span className="text-xl">↓</span></a>
                </div>
            </div>
            
        </section>
    )
}

export default Hero