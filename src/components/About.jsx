import './About.css';

function About() {
    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title">Sobre Mim</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">
                            Olá! Sou <strong>Juliane Almeida</strong>, uma profissional apaixonada por criar
                            soluções digitais que fazem a diferença.
                        </p>
                        <p>
                            Com uma combinação única de criatividade e habilidades técnicas, me dedico a
                            transformar ideias em experiências digitais memoráveis. Minha paixão está em
                            resolver problemas complexos com soluções elegantes e eficientes.
                        </p>
                        <p>
                            Sempre em busca de novos desafios e oportunidades de aprendizado, acredito que
                            a inovação acontece quando combinamos conhecimento técnico com visão estratégica
                            e empatia pelo usuário.
                        </p>

                        <div className="skills">
                            <h3>Habilidades</h3>
                            <div className="skills-grid">
                                <div className="skill-item">
                                    <div className="skill-icon">💻</div>
                                    <div className="skill-name">Desenvolvimento Web</div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon">🎨</div>
                                    <div className="skill-name">Design UI/UX</div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon">⚡</div>
                                    <div className="skill-name">Performance</div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon">🚀</div>
                                    <div className="skill-name">Inovação</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
