import React from "react";
import style from "./HeaderCss.css"
import LogoTitulo from "../../static/Iamgens/LogoTitulo.png";
import BotaoRosaPrincipal from "../../components/PinkButton";

const Header = (props) => {
  return (
    <>
    <div className="container">
      <div className="Header">
        <img className="LogoTitulo" src={props.LogoTitulo} alt="" />
        <ul className="Lista">
            <li>Sobre nós</li>
            <li>Para Você</li>
        </ul>
        <ul><li className="BotaoRosa">Entrar</li></ul>
        <BotaoRosaPrincipal frase="Crie uma conta"/>
      </div>
    </div>
    </>
  )
}

export default Header