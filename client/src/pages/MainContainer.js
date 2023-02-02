import React, { useState } from 'react';
// import Navigation from './Navigation';
import Login from '../components/Login';
import Profile
 from './Profile';
import Workout from '../pages/Workout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState('Login');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }

    if (currentPage === 'Wokout') {
      return <Workout />;
    }

    if (currentPage === 'Profile') {
        return <Profile />;
      };

    return Home
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      {/* <Navigation currentPage={currentPage} handlePageChange={handlePageChange} /> */}

      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}

      <Footer/>
    </div>
  );
}
