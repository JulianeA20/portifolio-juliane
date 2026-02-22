function Experience() {
    const experiences = [
        {
            id: 1,
            role: "Desenvolvedora Full Stack",
            company: "Tech Solutions",
            period: "2022 - Presente",
            description: "Desenvolvimento de aplicações web modernas utilizando React, Node.js e cloud services.",
            achievements: [
                "Liderou o desenvolvimento de 5+ projetos",
                "Melhorou performance em 40%",
                "Implementou CI/CD pipeline"
            ]
        },
        {
            id: 2,
            role: "Desenvolvedora Front-end",
            company: "Digital Agency",
            period: "2020 - 2022",
            description: "Criação de interfaces responsivas e experiências de usuário memoráveis.",
            achievements: [
                "Desenvolveu 15+ landing pages",
                "Aumentou conversão em 25%",
                "Implementou design system"
            ]
        },
        {
            id: 3,
            role: "Estagiária de Desenvolvimento",
            company: "StartUp Inc",
            period: "2019 - 2020",
            description: "Início da carreira em desenvolvimento web com foco em aprendizado prático.",
            achievements: [
                "Contribuiu em 3 projetos principais",
                "Aprendeu tecnologias modernas",
                "Trabalhou em equipe ágil"
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 relative bg-gradient-to-b from-transparent to-[rgba(236,72,153,0.05)]">
            <div className="max-w-[1200px] mx-auto px-8">
                <h2 className="font-display text-5xl font-extrabold mb-12 text-gradient text-center">Experiência</h2>

                {/* Timeline */}
                <div className="max-w-[900px] mx-auto mt-12 relative pl-12
                    before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0
                    before:w-0.5 before:bg-gradient-primary">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className="relative mb-12 animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {/* Marker */}
                            <div className="absolute -left-[3.5rem] top-0 w-4 h-4 rounded-full bg-gradient-primary
                                shadow-[0_0_0_4px_#0A0A0F,0_0_20px_rgba(139,92,246,0.5)]" />

                            {/* Card */}
                            <div className="bg-bg-card backdrop-blur-[10px] border border-white/10 rounded-3xl p-8
                                transition-all duration-300 hover:translate-x-2.5 hover:border-primary/30
                                hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                                <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                        <p className="text-primary-light font-semibold">{exp.company}</p>
                                    </div>
                                    <span className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full
                                        text-sm text-primary-light font-medium whitespace-nowrap">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-text-secondary leading-relaxed mb-6">{exp.description}</p>
                                <ul className="flex flex-col gap-3">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i} className="relative pl-6 text-text-secondary
                                            before:content-['✓'] before:absolute before:left-0 before:text-primary before:font-bold">
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
