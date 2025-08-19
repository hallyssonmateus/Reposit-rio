
function Navbar (){
    return (
        <header className="flex justify-between itens-center py-6 max-w-5xl mx-auto px-4">
            <h1 className="text-2xl font-bold tracking-tight">Hallysson Mateus</h1>
            <nav className="space-x-6">
                <a href="#about" className="hover:text-blue-600 transition">Sobre</a>
                <a href="#projects" className="hover:text-blue-600 transition">Projetos</a>
                <a href="#contact" className="hover:text-blue-600 transition">Contato</a>
            </nav>
        </header>
        
    )
}

export default Navbar