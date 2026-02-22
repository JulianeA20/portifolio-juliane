function Work() {
    const projects = [
        {
            id: 1,
            title: "Plataforma E-commerce",
            description: "Sistema completo de e-commerce com painel administrativo e integração de pagamentos.",
            tags: ["React", "Node.js", "MongoDB"],
            gradient: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)"
        },
        {
            id: 2,
            title: "App de Gestão",
            description: "Aplicativo web para gestão de projetos e equipes com dashboard em tempo real.",
            tags: ["Vue.js", "Firebase", "Tailwind"],
            gradient: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)"
        },
        {
            id: 3,
            title: "Portal Educacional",
            description: "Plataforma de ensino online com sistema de videoaulas e avaliações.",
            tags: ["React", "Supabase", "TypeScript"],
            gradient: "linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)"
        }
    ];

    return (
        <section id="work" className="py-24 relative bg-gradient-to-b from-[rgba(139,92,246,0.05)] to-transparent">
            <div className="max-w-[1200px] mx-auto px-8">
                <h2 className="font-display text-5xl font-extrabold mb-12 text-gradient text-center">Meus Trabalhos</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="bg-bg-card backdrop-blur-[10px] border border-white/10 rounded-3xl overflow-hidden
                            transition-all duration-300 animate-fade-in-up hover:-translate-y-2.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Colored header with shimmer on hover */}
                            <div
                                className="h-[200px] flex items-center justify-center relative overflow-hidden group"
                                style={{ background: project.gradient }}
                            >
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.1)_50%,transparent_70%)]
                                    -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                                <span className="text-[5rem] font-extrabold text-white/30 font-display">0{project.id}</span>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                                <p className="text-text-secondary leading-relaxed mb-6">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i}
                                            className="px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full
                                            text-sm text-primary-light font-medium">
                                            {tag}
                                        </span>
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
