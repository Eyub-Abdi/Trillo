import React, { useEffect } from 'react'
import './hotelOverview.scss'
// ICONS
import { ImStarFull } from 'react-icons/im'

function HotelOverview() {
  return (
    <div className="overview">
      <h1 className="overview__heading">Hotel Las Palmas</h1>
      <div className="overview__starts">
        <ImStarFull />
        <ImStarFull />
        <ImStarFull />
        <ImStarFull />
        <ImStarFull />
      </div>
      <div className="overview__location">Location</div>
    </div>
  )
}

export default HotelOverview
