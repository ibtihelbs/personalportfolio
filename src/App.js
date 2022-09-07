import './App.css';
import {useEffect, useRef} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Navbar from './componants/Navbar';
import Footer from './componants/Footer';
import TopScroll from './componants/TopScroll';
function App() {
  var cursor = document.querySelector('.cursor-follower');
  document.addEventListener('mousemove', (e)=>{
    var x = e.clientX;
    var y = e.clientY;
    console.log(x,y)
    cursor.style.left = x/2 + "px";
    cursor.style.bottom = y/2 + "px";
  })
  return (
      <div className="App">
        <div className="cursor-follower"></div>
        <div className="noise"></div>
        <BrowserRouter>
        <TopScroll/>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Work" element={<Work/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
        </div>
   
  );
}


export default App;
