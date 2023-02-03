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

      <h3 className="foot-header">  We hope this *Lifted* your spirits
        <br></br>
        Send us some love by
        tipping us here
        <br></br>
      </h3>
      
      <button className="tip-btn" onclick="window.location.href='https://buy.stripe.com/dR617567dgOcgog7st'"> $$$ </button>
        {/* ANCHOR THIS AND ADD STRIPE LINK */}

        {/* Link for redirecting users to go give us moneys: https://buy.stripe.com/dR617567dgOcgog7st */}

        {/* link for shameless carbon-offset plug: https://climate.stripe.com/S2RQQU */}

    </>
  )
}

export default Footer