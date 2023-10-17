import Header from "../Layout/Header/Header"

function Home() {

        return (
      <>
        <Header titulo="Bem vindo a Metflix" banner={banner} ></Header>
        <Main movies={MoviesP}></Main>
        <Footer></Footer>
      </>
    )
  }
  
  export default Home
  