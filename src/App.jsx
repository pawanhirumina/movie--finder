import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import MovieSearch from "./components/MovieSearch";
import Footer from "./components/Footer";

import NotFound from "./components/NotFound";


function App() {
  return (
    <BrowserRouter>
        <div style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<MovieSearch />} />
 
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
       </div>
    </BrowserRouter>


  );
}

export default App;
