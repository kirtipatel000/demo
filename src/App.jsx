import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar.jsx'
import Calculator from './Component/Calculator.jsx'
import Animation from './Component/Animation.jsx'
import Changecase from './Component/Changecase.jsx'
import Counter from './Component/Counter.jsx'
import Events from './Component/Events.jsx'
import Resizer from './Component/Resizer.jsx'
import Theme from './Component/Theme.jsx'
import Fetchdata from './Component/Fetchdata.jsx'
//import Usermenegment from "./Component/Usermenegment.jsx";
import Userlists from "./Component/Userlists.jsx";


export default function App() {
  const [theme,setTheme]= useState('bg-gray text-white')
  return (
    <BrowserRouter>
      <Routes>
       
          <Route index element={<Navbar />} />
          <Route path="/" element={<div><Navbar /></div>} />
          <Route path="Changdcase" element={<div><Navbar /><Changecase/></div>} />
          <Route path="fetchdata" element={<div><Navbar /><Fetchdata /></div>} />
          <Route path="theme" element={<div className={theme}><Navbar /><Theme ctheme={theme} updatetheme={setTheme}/></div>} />
          <Route path="counter" element={<div><Navbar /><Counter/></div>} />
          <Route path="resizer" element={<div><Navbar /><Resizer/></div>} />
          <Route path="calcutator" element={<div><Navbar /><Calculator/></div>} />
          <Route path="events" element={<div><Navbar /><Events/></div>} />
          <Route path="animation" element={<div><Navbar /><Animation/></div>} />
          <Route path="Usermenegment" element={<div><Navbar /><Userlists/></div>} />
        
      </Routes>
    </BrowserRouter>
  );
}
