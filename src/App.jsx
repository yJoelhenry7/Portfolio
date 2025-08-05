import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const Experience = lazy(() => import("./components/ExperienceContainer"));
const Projects = lazy(() => import("./components/ProjectContainer"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#experience" element={<Experience />} />
        <Route path="/#Projects" element={<Projects />} />
      </Routes>
    </Suspense>
  );
}

export default App;
