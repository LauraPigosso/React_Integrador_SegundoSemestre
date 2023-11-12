import React from "react";
import BotaoRosaPrincipal from "../../components/PinkButton";
import Mulher from "../../Imagens/Mulher.png"
import "./CardButton.css";

const CardButton = (props) => {
    return (
        <>
        <section className="Container">
            <div>
                <h1 className="Texto">Baixe o app Bubbank e dê um toque de sabor à sua vida financeira</h1>
                <BotaoRosaPrincipal frase="Abrir Conta" />
            </div>
            <div>
                <img className="Mulher" src={Mulher} alt="" />
            </div>
        </section>
        </>
    );
  };
  
  export default CardButton;