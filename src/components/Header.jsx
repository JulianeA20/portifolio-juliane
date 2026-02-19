import './Header.css';

function Header() {
    return (
        <header className="header">
            <nav className="nav container">
                <div className="logo">
                    <span className="logo-text">JA</span>
                </div>
                <ul className="nav-menu">
                    <li><a href="#home">Início</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#work">Trabalhos</a></li>
                    <li><a href="#experience">Experiência</a></li>
                    <li><a href="#contact" className="btn btn-primary">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
