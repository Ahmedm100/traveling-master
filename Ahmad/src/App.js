import Navbar from "./components/routes/navbar"; //navbar header
import { Routes , Route } from "react-router-dom";
import Intro from "./components/routes/intro";
import Skills from "./components/routes/skills";
import Games from "./components/routes/games";
import Contact from "./components/routes/contact";


function App() {
  return (
    <>
      <Routes>

      <Route path='/' element= {<Navbar />}/>
      <Route path= 'Intro' element={<Intro />}/>
      <Route path= 'Skills' element={<Skills/>}/>
      <Route path= 'Games' element={<Games />} />
      <Route path= 'Contact' element={<Contact />}/>
      
      
      </Routes>
      
      
    </>
  );
}

export default App;
