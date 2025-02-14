import { Link } from "wouter"
import Corazon from "../../assets/img/corazon.webp"
import "./styles.scss"

function Header() {
  return (
    <div className="header-container">
      <header className="App-header">
        <h1 className="ah-title">
          <Link href="/">Feliz Día del Amor!!</Link>
          <h2>¿Quieres ser mi San Valentin?</h2>
        </h1>
        <img
          className="ah-img-pokebola"
          src={Corazon}
          alt="Pokebola"
          width={44}
          height={44}
        />
      </header>
    </div>
  )
}

export default Header
