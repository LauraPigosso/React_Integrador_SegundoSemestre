import React from "react";
import LogoTitulo from "../../Imagens/LogoTitulo.png";
import BotaoRosaPrincipal from "../../components/PinkButton";
import './HeaderCss.css'; // Importe o arquivo CSS

const Header = (props) => {
  return (
    <div className="container">
      <div className="Header">
        <img className="LogoTitulo" src={LogoTitulo} alt="" />
        <ul className="Lista">
          <li>Sobre nós</li>
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
