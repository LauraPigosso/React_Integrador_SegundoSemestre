import Header from "../Layout/Header/Header"
import LogoTitulo from "../assets/logoTitulo.png"
// import CardButton from "../Layout/CardButton/CardButton"
import "./about.css"

function About() {

  return (
    <>
      <Header LogoTitulo={LogoTitulo} ></Header>
      <div className="sobre">
        <h2>Sobre o Bubbank</h2>
        <p>
          Bem-vindo ao Bubbank, onde a inovação financeira encontra a facilidade do dia a dia. Somos uma fintech dedicada a simplificar suas experiências bancárias, oferecendo uma variedade de serviços projetados para se adaptar ao seu estilo de vida. Nosso compromisso é proporcionar uma jornada bancária descomplicada e eficiente, permitindo que você gerencie suas finanças com tranquilidade.
        </p>
        <p>
          No Bubbank, acreditamos que a tecnologia pode transformar a maneira como você lida com o dinheiro. Oferecemos a conveniência de fazer depósitos, saques e transferências com apenas alguns cliques, proporcionando uma experiência bancária ágil e segura. Além disso, nosso processo simplificado para solicitar um cartão de crédito permite que você tenha acesso a crédito de maneira rápida e descomplicada.
        </p>
        <p>
          Nossa equipe está comprometida em fornecer um atendimento excepcional e em manter a transparência em todas as interações. No Bubbank, estamos construindo mais do que uma instituição financeira; estamos construindo uma comunidade que prospera junto com seus membros. Junte-se a nós enquanto continuamos a redefinir o futuro das finanças, oferecendo soluções modernas e acessíveis para suas necessidades bancárias cotidianas.
        </p>
      </div>
    </>
  )
}
export default About
