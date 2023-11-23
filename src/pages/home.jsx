import Header from "../Layout/Header/Header"
import LogoTitulo from "../assets/logoTitulo.png"
import CardButton from "../Layout/CardButton/CardButton"

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
  