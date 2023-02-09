import React, { useEffect } from 'react'
import './hotelView.scss'
// COMPONENTS
import Gallery from '../gallery/Gallery'
import HotelOverview from '../hotel-overview/HotelOverview'
import HotelDetails from '../hotel-details/HotelDetails'

function HotelView() {
  return (
    <main className="hotel-view">
      <Gallery />
      <HotelOverview />
      <HotelDetails />
    </main>
  )
}

export default HotelView
