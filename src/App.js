import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './route/About';
import Home from "./route/Home";
import Navigation from "./component/Navigation";

function App() {
    return (
    <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} > </Route>
            <Route path="/about" element={<About />} > </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default App;