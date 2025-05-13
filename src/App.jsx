import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import MovieSearch from "./components/MovieSearch";
import Footer from "./components/Footer";
<<<<<<< HEAD
import NotFound from './components/NotFound';
=======
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
>>>>>>> testing

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
        <div style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<MovieSearch />} />
 
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
       </div>
    </BrowserRouter>

=======
    <Routes>
      <Route path="/" element={<MovieSearch />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
>>>>>>> testing
  );
}

export default App;
