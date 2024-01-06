import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import About from "./components/About"

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#about" component={<About />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
