import React from "react";
import MovieSearch from "./components/MovieSearch";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MovieSearch />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
