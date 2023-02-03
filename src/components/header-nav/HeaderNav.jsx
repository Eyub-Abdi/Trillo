import React, { useEffect, useState } from 'react'
import './headerNav.scss'
// ICONS
import { IoIosBookmark } from 'react-icons/io'
import { IoIosChatboxes } from 'react-icons/io'

function HeaderNav() {
  const [massege, setMessage] = useState(10)

  return (
    <nav className="header-nav">
      <div className="header-nav__icon-box">
        <IoIosBookmark className="header-nav__icon" />
        <span className="header-nav__notification">7</span>
      </div>
      <div className="header-nav__icon-box">
        <IoIosChatboxes className="header-nav__icon" />
        {massege && <span className="header-nav__notification">{massege >= 9 ? '9+' : massege}</span>}
      </div>
      <div className="header-nav__user">
        <img className="header-nav__userphoto" src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=" alt="User profile picture" />
        <span className="header-nav__username">Helen</span>
      </div>
    </nav>
  )
}

export default HeaderNav
