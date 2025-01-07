import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./Pages/Home.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Services from "./Pages/Services.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import ContactUs from "./Pages/ContactUs.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/services" element={<Services />}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/contact-us" element={<ContactUs/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
