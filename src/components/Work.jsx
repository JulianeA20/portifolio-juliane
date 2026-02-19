import './Work.css';

function Work() {
    const projects = [
        {
            id: 1,
            title: "Plataforma E-commerce",
            description: "Sistema completo de e-commerce com painel administrativo e integração de pagamentos.",
            tags: ["React", "Node.js", "MongoDB"],
            gradient: "var(--gradient-primary)"
        },
        {
            id: 2,
            title: "App de Gestão",
            description: "Aplicativo web para gestão de projetos e equipes com dashboard em tempo real.",
            tags: ["Vue.js", "Firebase", "Tailwind"],
            gradient: "var(--gradient-secondary)"
        },
        {
            id: 3,
            title: "Portal Educacional",
            description: "Plataforma de ensino online com sistema de videoaulas e avaliações.",
            tags: ["React", "Supabase", "TypeScript"],
            gradient: "var(--gradient-accent)"
        }
    ];

    return (
        <section id="work" className="work section">
            <div className="container">
                <h2 className="section-title">Meus Trabalhos</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-header" style={{ background: project.gradient }}>
                                <div className="project-number">0{project.id}</div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Work;
