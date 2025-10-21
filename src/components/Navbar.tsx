import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
function Navbar() {

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
    <header className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <div className="flex justify-between items-center py-6 max-w-5xl mx-auto px-4">
        <div className="relative flex items-center gap-2 px-2">
          <a href="#" className="bg-blue-600 relative text-white rounded-xl px-2 py-1 font-semibold">
            <span className="relative z-10">{"</>"}</span>
            <span className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></span>
          </a>
          <h1 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-100">Hallysson Mateus</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Sobre</a>
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projetos</a>
          <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Experiência</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contato</a> 

          <button onClick={toggleDarkMode} className="ml-4 p-2 block rounded-md hover:bg-blue-600 dark:hover:bg-gray-700 transition">
            {darkMode ? (<SunIcon className="w-3 h-3 text-white-200" />) : (<MoonIcon className="w-3 h-3 text-white-200" />)}
          </button>
        </nav>
        <button className="md:hidden p-2 rounded-md text-zinc-800 hover:bg-gray-300 dark:hover:bg-gray-700 dark:text-white transition">
            ☰
          </button> 
      </div>
    </header>

  )
}

export default Navbar