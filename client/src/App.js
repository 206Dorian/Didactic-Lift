import Header from './componenets/Header';
import Footer from './componenets/Footer';
import Login from './componenets/pages/Login';
import Navigation from './componenets/pages/Navigation';
import Profile from './componenets/pages/Profile';
import Workout from './componenets/pages/Workout';





import './App.css';

function App() {
  return (
    <div className="App">

      <Header />

      <Navigation />

      <Login />

      <Header />

      <Profile />

      <Workout />

      <Footer />


    </div>
  );
}

export default App;
