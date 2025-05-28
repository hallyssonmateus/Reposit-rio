
function Navbar (){
    return (
        <nav className="fixed w-full bg-gray-900 text-white p-4 shadow">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2x1 font-bold">Hallysson Mateus</div>
                <ul className="flex space-x-6">
                    <li className="hover:text-gray-400 cursor-pointer">Sobre</li>
                    <li className="hover:text-gray-400 cursor-pointer">Skills</li>
                    <li className="hover:text-gray-400 cursor-pointer">Projetos</li>
                    <li className="hover:text-gray-400 cursor-pointer">Contato</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar