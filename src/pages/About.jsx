import Header from "../assets/Layout/Header/Header"
import LogoTitulo from "../static/Imagens/LogoTitulo.png"
import CardButton from "../assets/Layout/CardButton/CardButton"

function Home() {

        return (
      <>
        <Header LogoTitulo={LogoTitulo} ></Header>
        <div>
        <CardButton></CardButton>
        </div>
      </>
    )
  }
  
  export default Home
  