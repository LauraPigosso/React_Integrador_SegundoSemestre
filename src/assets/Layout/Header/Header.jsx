import React from "react";
import LogoTitulo from "../../static/Iamgens/LogoTitulo.png";

const Header = (props) => {
  return (
    <> 
    <header> 
      <img src={LogoTitulo} alt="./../static/Iamgens/LogoTitulo.png"/> 
      <div> 
        <nav> 
            <li><a>Sobre nós</a></li> 
            <li><a>Para você</a></li> 
            <button>Entrar</button> 
        </nav> 
      </div> 
    </header> 
    </>
  )
}

export default Header