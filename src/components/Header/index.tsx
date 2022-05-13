import { Link } from "wouter"
import Pokebola from "../../assets/img/pokebola.png"
import "./styles.scss"

function Header() {
  return (
    <div className="header-container">
      <header className="App-header">
        <h1 className="ah-title">
          <Link href="/">Pokedex</Link>
        </h1>
        <img
          className="ah-img-pokebola"
          src={Pokebola}
          alt="Pokebola"
          width={44}
          height={44}
        />
      </header>
    </div>
  )
}

export default Header
