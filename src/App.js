//  import css
import './App.css';
// import components
// import Footer from './components/Footer';
import About from './components/About';
import Content from './components/Content';
import Events from './components/Events';
import Home from './components/Home';
import News from './components/News';
// import router and react
import { Routes, Route } from "react-router-dom";
import {Link} from 'react-router-dom';
import React from 'react';
import { Navigate } from 'react-router-dom';

function App() {
  return (
      <div className="App">
            <header>
              <div>
                <nav>
                  <span class='phatom_block'></span>
                  <Link to="/Home"><button class='header_btn'>Main</button></Link>
                  <Link to="/News"><button class='header_btn'>News</button></Link>
                  <Link to="/Events"><button class='header_btn'>Events</button></Link>
                  <Link to="/About"><button class='header_btn'>About Us</button></Link>
                  <span class='phatom_block'></span>
                </nav>
              <hr></hr>
              </div>
            </header>
            <Routes>
              <Route path="/" element={ <Navigate to="/Home" /> } />
              <Route exact path="/Home"  element={<Home/>}></Route>
              <Route exact path="/News"  element={<News/>}></Route>
              <Route exact path="/Events"  element={<Events/>}></Route>
              <Route exact path="/About" element={<About/>}></Route>
            </Routes>
      </div>
  );
}

export default App;
