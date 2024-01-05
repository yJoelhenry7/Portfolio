import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Experience from "./pages/Experience"
import AboutMe from "./pages/Experience"
import Projects from "./pages/Projects"

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
