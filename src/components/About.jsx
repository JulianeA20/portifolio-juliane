function About() {
    return (
        <section id="about" className="py-24 relative bg-gradient-to-b from-transparent to-[rgba(139,92,246,0.05)]">
            <div className="max-w-[1200px] mx-auto px-8">
                <h2 className="font-display text-5xl font-extrabold mb-16 text-gradient text-center">Sobre Mim</h2>

                <div className="max-w-[900px] mx-auto animate-fade-in-up">
                    <p className="text-2xl text-white mb-8 leading-relaxed">
                        Olá! Sou{' '}
                        <strong className="text-gradient">Juliane Almeida</strong>
                        , uma profissional apaixonada por criar soluções digitais que fazem a diferença.
                    </p>
                    <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                        Com uma combinação única de criatividade e habilidades técnicas, me dedico a
                        transformar ideias em experiências digitais memoráveis. Minha paixão está em
                        resolver problemas complexos com soluções elegantes e eficientes.
                    </p>
                    <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                        Sempre em busca de novos desafios e oportunidades de aprendizado, acredito que
                        a inovação acontece quando combinamos conhecimento técnico com visão estratégica
                        e empatia pelo usuário.
                    </p>

                    <div className="mt-12">
                        <h3 className="text-3xl font-bold mb-8 text-white">Habilidades</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {[
                                { icon: '💻', name: 'Desenvolvimento Web' },
                                { icon: '🎨', name: 'Design UI/UX' },
                                { icon: '⚡', name: 'Performance' },
                                { icon: '🚀', name: 'Inovação' },
                            ].map((skill) => (
                                <div key={skill.name}
                                    className="bg-bg-card backdrop-blur-[10px] border border-white/10 rounded-2xl p-8
                                    text-center transition-all duration-300 cursor-pointer
                                    hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                                    <div className="text-5xl mb-4">{skill.icon}</div>
                                    <div className="font-semibold text-white">{skill.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
