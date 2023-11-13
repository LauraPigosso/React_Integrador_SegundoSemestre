import React from "react";
import {Link} from "react-router-dom"
import LogoTitulo from "../../assets/LogoTitulo.png";
import BotaoRosaPrincipal from "../../components/PinkButton";
import './HeaderCss.css'; // Importe o arquivo CSS

const Header = () => {
  return (
    <div className="container">
      <div className="Header">
        <Link to="/">
          <img className="LogoTitulo" src={LogoTitulo} alt="" />
        </Link>
        <ul className="Lista">
          <Link to="/sobre-nos">Sobre nós</Link>
        </ul>
        <ul className="Lista">
          <li>Para você</li>
        </ul>
        <div className="Botoes">
          <ul>
            <li className="BotaoRosa">Entrar</li>
          </ul>
          <BotaoRosaPrincipal frase="Abrir Conta" />
        </div>
      </div>
    </div>
  );
};

export default Header;
