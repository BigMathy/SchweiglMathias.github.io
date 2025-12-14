// Importing necessary libraries and components
import { Routes, Route, Navigate } from "react-router-dom";

// Importing custom components and pages
import NavBar from "./components/NavBar"
import BentoBox from './components/BentoBox'
import Footer from './components/Footer'
import HydratePlus from './pages/HydratePlus'
import TreehouseCasino from './pages/TreehouseCasino'
import SchneggiEssen from './pages/SchneggiEssen'

// Importing CSS
import './App.css'

function App() {

  return (
    <>
      <NavBar className="navbar" />
      <div className='main'>
        <Routes>
          {/*Navigation routes for the portfolio projects*/}
          <Route path='/portfolio' element={<BentoBox className="bento-box"/>}/>
          <Route path='/portfolio/Hydrate+' element={<HydratePlus />}/>
          <Route path='/portfolio/TreehouseCasino' element={<TreehouseCasino />}/>
          <Route path='/portfolio/SchneggiEssen' element={<SchneggiEssen />}/>
          {/*Redirect any unknown routes to /portfolio*/}
          <Route path="*" element={<Navigate to="/portfolio" replace />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
