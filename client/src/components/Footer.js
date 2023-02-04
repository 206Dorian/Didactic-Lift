import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='enchilada'>
      <h3 className="foot-header"><p id="spirits">We hope this *Lifted* your spirits</p>
        <p>❤️ Send us some love by
        tipping us <a href="https://buy.stripe.com/aEUg1ZantdC03BufZ0" target="_blank" rel="noopener noreferrer" className='tip-btn'>here!</a> ❤️</p>
      </h3>

      <a href="https://climate.stripe.com/S2RQQU" target="_blank" rel="noopener noreferrer" className='carbon-btn'>Your tips help Didactic Lift fund carbon offsets!
      </a>

      <p id="footerfooter">Made with <p id="heart">🦾</p> by <a id="LDE-4eva" href="https://github.com/206Dorian/Didactic-Lift" target="_blank" rel="noopener noreferrer">Team Last Ditch Effort</a></p>
    </div>
  )
}
export default Footer