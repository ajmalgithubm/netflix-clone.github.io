import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Poster from "./Components/Poster/Poster";
import BodyContent from "./Components/BodyContent/BodyContent";
function App() {
  const [windowWidth, setWindowWidth]= useState(window.innerWidth);
  const handleResize = ()=>{
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log('useEffect invoked...')
  },[])
  return (
    <div className="App">
       <NavBar windowWidth={windowWidth}/> 
       <BodyContent windoWidth={windowWidth}/>
       
      
    </div>
  );
}

export default App;
