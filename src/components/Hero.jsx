function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 py-24">
            <div className="max-w-[1200px] mx-auto px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-[1]">
                    {/* Text */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h1 className="font-display text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                            Olá, eu sou
                            <span className="block text-gradient bg-gradient-animate">
                                Juliane Almeida
                            </span>
                        </h1>
                        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                            Criando experiências digitais excepcionais com paixão e inovação
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <a href="#contact"
                                className="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-full
                                shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg">
                                Entre em Contato
                            </a>
                            <a href="#work"
                                className="px-8 py-4 bg-transparent text-primary border-2 border-primary font-semibold
                                rounded-full transition-all duration-300 hover:bg-primary hover:text-white">
                                Ver Trabalhos
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative animate-fade-in-up md:order-last order-first" style={{ animationDelay: '0.4s' }}>
                        <div className="relative animate-float">
                            <img
                                src="/profile.png"
                                alt="Juliane Almeida"
                                className="w-full h-auto rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative z-[2]"
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]
                                bg-gradient-primary blur-[60px] opacity-30 z-[1] bg-gradient-animate" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="w-6 h-10 border-2 border-primary rounded-[20px] relative">
                    <div className="w-[3px] h-2 bg-primary rounded-sm absolute top-2 left-1/2 -translate-x-1/2 animate-scroll" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
