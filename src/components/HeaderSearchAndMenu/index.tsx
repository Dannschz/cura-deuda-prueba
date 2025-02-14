// import React from 'react'
import Header from '../Header'
import './styles.scss'

/* interface HSAMProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
} */

function HeaderSearchAndMenu() {
  return (
    <div className='absoluteHeaderAndSearch'>
      <Header />
      <div>
        <h2 className='message_love'>
          Ha sido poco el tiempo de conocernos, sin embargo he
          logrado llegar a sentir lo que hace mucho tiempo no sentia
          por alguien, trajiste de vuelta al chico romantico, carinoso, detallista
          amoroso, preocupon, empalagoso y eso me dice que contigo puedo ser yo mismo.
          En el amor no se escatima y contigo quiero darlo todo
          Espero que hagamos que esto dure mucho, no será facil pero
          tu me motivas a querer hacerlo. Te quiero mi chapparrita hermosa ❤️🥰
        </h2>

        <h3 className='message_love'>
          P.D: Te quiero mucho mucho flaquita 😘
        </h3>
      </div>
    </div>
  )
}

export default HeaderSearchAndMenu
