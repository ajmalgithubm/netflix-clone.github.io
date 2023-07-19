import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Poster from "./Components/Poster/Poster";
import BodyContent from "./Components/BodyContent/BodyContent";
import ButtonFooter from "./Components/ButtonFooter/ButtonFooter";
import Footer from "./Components/Footer/Footer";
import { instance } from "./Components/Constant/Constant";
import './App.css';
import axios from "axios";
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [movie, setMovie] = useState();
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    //console.log('useEffect invoked...');

  }, [])
  return (
    <div className="App">
      <NavBar windowWidth={windowWidth} />
      <BodyContent windoWidth={windowWidth} />
      <ButtonFooter />
      <Footer />

    </div>
  );
}

export default App;
