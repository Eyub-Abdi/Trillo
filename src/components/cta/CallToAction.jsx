import { useEffect } from 'react'
import './call-to-action.scss'

function CallToAction() {
  return (
    <div className="cta">
      <h2 className="cta__book-now">Good news! we have 4 good rooms for your selected date</h2>
      <button className="btn">
        <span className="btn__visible">Book now</span>
        <span className="btn__hiden">Only 4 rooms left</span>
      </button>
    </div>
  )
}

export default CallToAction
