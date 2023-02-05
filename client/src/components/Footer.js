import "./Footer.css"

export default function Footer(){
  return (
    <div className='enchilada'>
      <h2 className="foot-header"><p id="spirits">We hope this *Lifted* your spirits</p>
        <h2>❤️ Send us some love by
        tipping us <a href="https://buy.stripe.com/eVa3fdeDJdC05JC8wz" target="_blank" rel="noopener noreferrer" className='tip-btn'>here!</a> ❤️</h2>
      </h2>

      <a href="https://climate.stripe.com/S2RQQU" target="_blank" rel="noopener noreferrer" className='carbon-btn'>Your tips help Didactic Lift fund carbon offsets!
      </a>

      <h2 id="footerfooter">Made with <span id="heart">🦾</span> by <a id="LDE-4eva" href="https://github.com/206Dorian/Didactic-Lift" target="_blank" rel="noopener noreferrer">Team Last Ditch Effort</a></h2>
    </div>
  )
}
