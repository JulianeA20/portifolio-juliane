function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-[rgba(10,10,15,0.8)] backdrop-blur-xl border-b border-white/10 z-[1000] transition-all duration-300">
            <nav className="flex justify-between items-center px-8 py-6 max-w-[1200px] mx-auto">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold text-gradient">JA</span>
                </div>
                <ul className="flex gap-8 list-none items-center text-sm md:text-base">
                    <li>
                        <a href="#home"
                            className="text-text-secondary font-medium transition-all duration-300 relative hover:text-primary-light
                            after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5
                            after:bg-gradient-primary after:transition-all after:duration-300 hover:after:w-full">
                            Início
                        </a>
                    </li>
                    <li>
                        <a href="#about"
                            className="text-text-secondary font-medium transition-all duration-300 relative hover:text-primary-light
                            after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5
                            after:bg-gradient-primary after:transition-all after:duration-300 hover:after:w-full">
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="#work"
                            className="text-text-secondary font-medium transition-all duration-300 relative hover:text-primary-light
                            after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5
                            after:bg-gradient-primary after:transition-all after:duration-300 hover:after:w-full">
                            Trabalhos
                        </a>
                    </li>
                    <li>
                        <a href="#experience"
                            className="text-text-secondary font-medium transition-all duration-300 relative hover:text-primary-light
                            after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5
                            after:bg-gradient-primary after:transition-all after:duration-300 hover:after:w-full">
                            Experiência
                        </a>
                    </li>
                    <li>
                        <a href="#contact"
                            className="px-6 py-3 bg-gradient-primary text-white font-semibold rounded-full
                            shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg text-sm md:text-base">
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
