import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./routes/Home";
import Pricing from "./routes/Pricing";
import Training from './routes/Training'
import Contactus from "./routes/Contact";
import Bookning from "./routes/Bookning";
import Auth from "./components/auth/Auth";
import Register from "./components/auth/Register";


function App() {
  return (
    <>
      <Routes>
      <Route path='/'element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/training" element={<Training />} />
      <Route path="/contact" element={<Contactus />} />
      <Route path="/bookning" element={<Bookning />} />
      <Route path="/Login" element={<Auth />} />
      <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
