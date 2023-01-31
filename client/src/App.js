import Header from './componenets/Header';
import Footer from './componenets/Footer';
import Login from './componenets/pages/Login';
import Profile from './componenets/pages/Profile';
import Workout from './componenets/pages/Workout';
import { css } from '@emotion/react';





import './App.css';

function App() {
  return (
    <container className="App">

      <br></br>

      <Header />

      <br></br>

      <Login />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      
      <Profile />
      <br></br>
      <br></br>

      <Workout />

      <br></br>

      <Footer />

      <br></br>

    </container>
  );
}

export default App;
