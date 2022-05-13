import React from 'react'
import './styles.scss'
import buscarIcon from '../../assets/img/buscar.svg'
import menuIcon from '../../assets/img/menu.svg'
import { Link } from 'wouter'

interface SearchFieldProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

function SearchField({ setSearchValue }: SearchFieldProps) {
  const [inputValue, setInputValue] = React.useState('')
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchValue(inputValue)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='searchField'>
      <form onSubmit={handleSubmit} className='sf-form'>
        <label className='sf-label' htmlFor='pokemon'>
          <input
            className='sf-input'
            type='text'
            name='pokemon'
            id='pokemon'
            placeholder='Search a pokemon'
            value={inputValue}
            onChange={handleChange}
          />
          <button
            type='button'
            className='sf-searchButton'
            onClick={e => {
              setSearchValue(inputValue)
            }}>
            <img className='sf-sb-searchIcon' src={buscarIcon} alt='buscar' />
          </button>
        </label>
      </form>
      <div className='hambMenu'>
        <button className='hambMenuBtn' onClick={handleMenuClick}>
          <img
            className='menuIcon'
            src={menuIcon}
            alt='menu'
            width={44}
            height={44}
          />
        </button>
        {isMenuOpen && (
          <div className='menu'>
            <ul className='ul-menu'>
              <Link href='/' className='ul-li-item'>
                All pokemons
              </Link>
              <Link href='/pokedex' className='ul-li-item'>
                My Pokedex
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchField
