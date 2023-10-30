import React from 'react';
import styles from './PinkButton.css'

const BotaoRosaPrincipal = (props) => {
  return (
    <button className="EstiloBRosa">{props.frase}</button>
  );
};

export default BotaoRosaPrincipal;
