import React, { useEffect } from 'react'
import './hotelOverview.scss'
// ICONS
import { ImStarFull } from 'react-icons/im'
import { ImLocation2 } from 'react-icons/im'

function HotelOverview() {
  return (
    <div className="overview">
      <h1 className="overview__heading">Hotel Las Palmas</h1>
      <div className="overview__stars">
        <ImStarFull className="overview__icon-star" />
        <ImStarFull className="overview__icon-star" />
        <ImStarFull className="overview__icon-star" />
        <ImStarFull className="overview__icon-star" />
        <ImStarFull className="overview__icon-star" />
      </div>
      <div className="overview__location">
        <ImLocation2 className="overview__icon-location" />
        <button className="btn-inline">Southern West Zanzibar</button>
      </div>

      <div className="overview__rating">
        <div className="overview__rating-average">8.6</div>
        <div className="overview__rating-count">437 votes</div>
      </div>
    </div>
  )
}

export default HotelOverview
