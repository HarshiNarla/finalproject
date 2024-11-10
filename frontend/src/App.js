import React from 'react';
import NavBar from './components/NavBar';
import Services from './components/Services';
import AboutandTeam from './components/AboutandTeam';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
// import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <NavBar />
      <div className="content">
        <video className="video-background" autoPlay muted loop>
          <source src="https://videos.pexels.com/video-files/4211036/4211036-hd_1280_720_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1>PAWSIFY</h1>
        <p>Because every paw deserves a little extra love!</p>
      </div>
    </div>
        <Services />
        <AboutandTeam />
        {/* <Team /> */}
      <Login />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
