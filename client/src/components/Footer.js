import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <h3 className="foot-header"><p>We hope this *Lifted* your spirits</p>
        <p>Send us some love by
        tipping us <a href="https://buy.stripe.com/dR617567dgOcgog7st" target="_blank" rel="noopener noreferrer" className='tip-btn'>here!</a></p>
      </h3>

      <a href="https://climate.stripe.com/S2RQQU" target="_blank" rel="noopener noreferrer" className='carbon-btn'>Your tips help Didactic Lift support the environment!
      </a>
    </>
  )
}
export default Footer