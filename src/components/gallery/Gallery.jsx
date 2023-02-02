import React, { useEffect } from 'react'
import './gallery.scss'

function Gallery() {
  return (
    <div className="gallery">
      <figure className="gallery__item">
        <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="photo  " className="gallery__photo" />
      </figure>
      <figure className="gallery__item">
        <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="photo  " className="gallery__photo" />
      </figure>
      <figure className="gallery__item">
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="photo  " className="gallery__photo" />
      </figure>
    </div>
  )
}

export default Gallery
