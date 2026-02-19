import './Hero.css';

function Hero() {
    return (
        <section id="home" className="hero section">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text animate-in">
                        <h1 className="hero-title">
                            Olá, eu sou
                            <span className="gradient-text"> Juliane Almeida</span>
                        </h1>
                        <p className="hero-subtitle">
                            Criando experiências digitais excepcionais com paixão e inovação
                        </p>
                        <div className="hero-buttons">
                            <a href="#contact" className="btn btn-primary">Entre em Contato</a>
                            <a href="#work" className="btn btn-outline">Ver Trabalhos</a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="image-wrapper">
                            <img src="/profile.png" alt="Juliane Almeida" />
                            <div className="image-glow"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
