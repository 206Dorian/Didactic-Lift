import React from 'react'
import { useNavigate } from 'react-router-dom'


function StripeButton() {
    const navigate = useNavigate();
    const routeChange = () => {
      let path = `https://buy.stripe.com/dR617567dgOcgog7st`;
      navigate(path);
    }

  return (
    <div className="app flex-row align-items-center">
          
         <link onClick={routeChange}>
             $$$$$$
           </link>

   </div>
  )
}

export default StripeButton
