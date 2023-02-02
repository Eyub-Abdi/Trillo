import React, { useEffect } from 'react'
import './navigation.scss'
// ICONS
import { ImHome3 } from 'react-icons/im'
import { ImRocket } from 'react-icons/im'
import { ImKey } from 'react-icons/im'
import { ImMap2 } from 'react-icons/im'

function Navigation() {
  return (
    <nav className="side-bar">
      <ul className="side-bar__nav">
        <li className="side-bar__item side-bar__item--active">
          <a href="#" className="side-bar__link">
            <ImHome3 className="side-bar__icon" />
            <span className="side-bar__label">Hotel</span>
          </a>
        </li>
        <li className="side-bar__item">
          <a href="#" className="side-bar__link">
            <ImRocket className="side-bar__icon" />
            <span className="side-bar__label">Flight</span>
          </a>
        </li>
        <li className="side-bar__item">
          <a href="#" className="side-bar__link">
            <ImKey className="side-bar__icon" />
            <span className="side-bar__label">Car rental</span>
          </a>
        </li>
        <li className="side-bar__item">
          <a href="#" className="side-bar__link">
            <ImMap2 className="side-bar__icon" />
            <span className="side-bar__label">Tours</span>
          </a>
        </li>
      </ul>
      <div className="legal">&copy; {new Date().getFullYear()} by trillo. All right reserved. Ayub Abdi Inc.</div>
    </nav>
  )
}

export default Navigation
