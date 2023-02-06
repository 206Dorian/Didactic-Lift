import Login from './Login'
import Signup from './Signup'
import './Home.css'

export default function Home(){

  return (
    <div className="container" id="test">
      <Login />
      <br></br>
      <Signup />
      <br></br>
    </div>
  )
}

