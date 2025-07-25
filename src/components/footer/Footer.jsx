import React from 'react';
import './Footer.css'; // Opcional: para estilos específicos do rodapé
import Tab from "../tab/Tab";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className='footer-text'>
          <p>&copy; {new Date().getFullYear()} CinePlayX - Infos de Séries e Filmes. Todos os direitos reservados.</p>
        </div>
        <div className='footer-tabs'>
            <Tab text="Sobre" target="/sobre" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;