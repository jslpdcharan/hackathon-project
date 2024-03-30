import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Committee from "./Committee"
import Events from "./Events"
import Clubs from "./Clubs"
import Alumni from "./Alumni"

import { Route, Routes } from "react-router-dom"


function App() {
  return (
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Committee" element={<Committee />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Clubs" element={<Clubs />} />
            <Route path="/Alumni" element={<Alumni />} />
          </Routes>
        </div>
      </>
  )
}

export default App