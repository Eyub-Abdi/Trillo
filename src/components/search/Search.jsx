import React, { useEffect } from 'react'
import { ImSearch } from 'react-icons/im'
import './search.scss'

function Search() {
  return (
    <form action="#" className="search">
      <input type="text" placeholder="Search hotels" className="search__input" />
      <button className="search__button">
        <ImSearch className="search__search" />
      </button>
    </form>
  )
}

export default Search
