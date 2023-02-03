import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import Login from "./componenets/pages/Login";
import Profile from "./componenets/pages/Profile";
import Workout from "./componenets/pages/Workout";
import { css } from "@emotion/react";
import Home from "./componenets/pages/Home";

import "./App.css";
import { APICall } from "./componenets/APIcall";

function App() {
  return (
    <container className="App">
      <Header />

      <Home />

      {/* <Login /> */}

      <Profile />
      <br></br>

      <div style={{ height: "50px" }}>
        <Footer />
      </div>
    </container>
  );
}

export default App;
