function Hero (){
    return (
        <section className="bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 text-white h-screen flex items-center justify-center">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4">
                <div className="flex justify-center">
                    <img src="/My_Photo.jpg" alt="Hallysson Mateus" className="rounded-full w-60 h-60 object-cover border-4 border-white shadow-lg"/>
                </div>
                <div className="text-center px-4">
                    <h1 className="text-3x1 md: text-3xl font-bold mb-4">Olá, sou Hallysson Mateus</h1>
                    <p className="text-xl md:text-2xl mb-8">Full Stack Developer</p>                    
                </div>
            </div>

            
        </section>
    )
}

export default Hero