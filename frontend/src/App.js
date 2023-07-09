import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home.jsx';
import AddBook from "./pages/addBook.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add_Book' element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
