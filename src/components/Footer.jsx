import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo-text">JA</div>
                        <p>Criando experiências digitais memoráveis</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-section">
                            <h4>Navegação</h4>
                            <ul>
                                <li><a href="#home">Início</a></li>
                                <li><a href="#about">Sobre</a></li>
                                <li><a href="#work">Trabalhos</a></li>
                                <li><a href="#experience">Experiência</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>Social</h4>
                            <ul>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Juliane Almeida. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
