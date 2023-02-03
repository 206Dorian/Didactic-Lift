import React from 'react'
import styled from '@emotion/styled'
import "./Footer.css"

// const Button = styled.button`
//   padding: 32px;
//   background-color: hotpink;
//   font-size: 24px;
//   border-radius: 4px;
//   color: black;
//   font-weight: bold;
//   &:hover {
//     color: white;
//   }
// `


const Footer = () => {
  return (
    <>

      <h3 className="foot-header"><p>We hope this *Lifted* your spirits</p>
        <h5>Send us some love by
        tipping us <a href="https://buy.stripe.com/dR617567dgOcgog7st" target="_blank" rel="noopener noreferrer" className='tip-btn'>here!</a></h5>
        {/* <br></br> */}
      </h3>
      <a href="https://climate.stripe.com/S2RQQU" target="_blank" rel="noopener noreferrer" className='carbon-btn'>Didactic Lift supports the environment!
      </a>

        {/* Link for redirecting users to go give us moneys: https://buy.stripe.com/dR617567dgOcgog7st */}

        {/* link for shameless carbon-offset plug: https://climate.stripe.com/S2RQQU */}

    </>
  )
}

export default Footer