function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[rgba(10,10,15,0.9)] border-t border-white/10 pt-16 pb-8 mt-16">
            <div className="max-w-[1200px] mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="text-2xl font-extrabold text-gradient mb-4">JA</div>
                        <p className="text-text-secondary mt-4">Criando experiências digitais memoráveis</p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-16">
                        <div>
                            <h4 className="text-white mb-4 text-lg font-semibold">Navegação</h4>
                            <ul className="flex flex-col gap-3">
                                {[
                                    { href: '#home', label: 'Início' },
                                    { href: '#about', label: 'Sobre' },
                                    { href: '#work', label: 'Trabalhos' },
                                    { href: '#experience', label: 'Experiência' },
                                ].map((link) => (
                                    <li key={link.href}>
                                        <a href={link.href}
                                            className="text-text-secondary no-underline transition-all duration-300
                                            hover:text-primary-light hover:pl-1.5">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white mb-4 text-lg font-semibold">Social</h4>
                            <ul className="flex flex-col gap-3">
                                {[
                                    { href: '#', label: 'LinkedIn' },
                                    { href: '#', label: 'GitHub' },
                                    { href: '#', label: 'Instagram' },
                                ].map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer"
                                            className="text-text-secondary no-underline transition-all duration-300
                                            hover:text-primary-light hover:pl-1.5">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/5 text-center text-text-muted">
                    <p>&copy; {currentYear} Juliane Almeida. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
