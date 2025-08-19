import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
function Navbar (){

    const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

    return (
        <header className="flex justify-between itens-center py-6 max-w-5xl mx-auto px-4 bg-gray-100">
            <h1 className="text-2xl font-bold tracking-tight">Hallysson Mateus</h1>
            <nav className="flex itens-center space-x-6">
                <a href="#about" className="hover:text-blue-600 transition">Sobre</a>
                <a href="#about" className="hover:text-blue-600 transition">Skills</a>
                <a href="#projects" className="hover:text-blue-600 transition">Projetos</a>
                <a href="#projects" className="hover:text-blue-600 transition">Experiência</a>
                <a href="#contact" className="hover:text-blue-600 transition">Contato</a>

                <button onClick={toggleDarkMode} className="ml-4 p-2 rounded-md hover:bg-blue-600 dark:hover:bg-gray-700 transition">
                    {darkMode ? (<SunIcon className="w-3 h-3 text-yellow-200" />) : (<MoonIcon className="w-3 h-3 text-white-200" />)}
                </button>
            </nav>
        </header>
        
    )
}

export default Navbar