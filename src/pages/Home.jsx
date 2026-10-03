import { useState } from "react";
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import ProjectContainer from "../components/ProjectContainer"
import Header from "../components/header/Header"
import ProjectDetails from "../components/ProjectDetails";
import ExperienceContainer from "../components/ExperienceContainer"
import CursorFollower from "../components/CursorFollower";
import Education from "../components/Education";
import About from "../components/About";
import Contact from "../components/Contact";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Home = () => {
   const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <>
      <CursorFollower />
      <ScrollToTopButton />
      <Header />
      <Hero />
      <About />
      <ExperienceContainer />
      <Skills />
      <Education />
      <ProjectContainer  openModal={openModal} setOpenModal={setOpenModal} />
      <Contact />
      <Footer />
      {openModal.project &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        }
    </>
  )
}

export default Home
