import './App.css'
import NavBar from "./components/NavBar"
import BentoBox from './components/BentoBox'
import Footer from './components/Footer'
import { Routes, Route, Navigate } from "react-router-dom";
import HydratePlus from './pages/HydratePlus'
import TreehouseCasino from './pages/TreehouseCasino'
import SchneggiEssen from './pages/SchneggiEssen'

function App() {

  return (
    <>
      <NavBar className="navbar" />
      <div className='main'>
        <Routes>
          <Route path='/portfolio' element={<BentoBox className="bento-box"/>}/>
          <Route path='/portfolio/Hydrate+' element={<HydratePlus />}/>
          <Route path='/portfolio/TreehouseCasino' element={<TreehouseCasino />}/>
          <Route path='/portfolio/SchneggiEssen' element={<SchneggiEssen />}/>
          <Route path="*" element={<Navigate to="/portfolio" replace />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
