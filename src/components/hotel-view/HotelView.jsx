import React, { useEffect } from 'react'
import './hotelView.scss'
// COMPONENTS
import Gallery from '../gallery/Gallery'
import HotelOverview from '../hotel-overview/HotelOverview'

function HotelView() {
  return (
    <main className="hotel-view">
      <Gallery />
      <HotelOverview />
    </main>
  )
}

export default HotelView
