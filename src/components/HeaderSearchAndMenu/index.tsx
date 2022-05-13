import React from 'react'
import Header from '../Header'
import SearchField from '../SearchField'
import './styles.scss'

interface HSAMProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

function HeaderSearchAndMenu({ setSearchValue }: HSAMProps) {
  return (
    <div className='absoluteHeaderAndSearch'>
      <Header />
      <SearchField setSearchValue={setSearchValue} />
    </div>
  )
}

export default HeaderSearchAndMenu
