import './header.scss'
import React, { useEffect } from 'react'
import Search from '../search/Search'
import HeaderNav from '../header-nav/HeaderNav'

function Header() {
  return (
    <header className="main-header">
      <div className="logo">Logo</div>
      <Search />
      <HeaderNav />
    </header>
  )
}

export default Header
