import { useState } from "react";
import Home from "./pages/Home"
import Favourites from "./pages/Favourites";

import { Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <div>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/favourities" element={<Favourites/>} />
      </Routes>
    </div>
  );
}

export default App
