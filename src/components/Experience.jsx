import './Experience.css';

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
        <section id="experience" className="experience section">
            <div className="container">
                <h2 className="section-title">Experiência</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className="timeline-item"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="experience-header">
                                    <div>
                                        <h3 className="role">{exp.role}</h3>
                                        <p className="company">{exp.company}</p>
                                    </div>
                                    <span className="period">{exp.period}</span>
                                </div>
                                <p className="description">{exp.description}</p>
                                <ul className="achievements">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
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
