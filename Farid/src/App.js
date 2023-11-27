import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./routes/Home";
import Pricing from "./routes/Pricing";
import Training from './routes/Training'
import Contactus from "./routes/Contact";
import Bookning from "./routes/Bookning";


function App() {
  return (
    <>
      <Routes>
      <Route path='/'element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/training" element={<Training />} />
      <Route path="/contact" element={<Contactus />} />
      <Route path="/bookning" element={<Bookning />} />
      </Routes>
    </>
  );
}

export default App;
