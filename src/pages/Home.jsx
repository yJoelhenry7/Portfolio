import { useState } from "react";
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import ProjectContainer from "../components/ProjectContainer"
import Header from "../components/header/Header"
import ProjectDetails from "../components/ProjectDetails";
import ExperienceContainer from "../components/ExperienceContainer"
import CursorFollower from "../components/CursorFollower";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Home = () => {
   const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <>
      <CursorFollower />
      <ScrollToTopButton />
      <Header />
      <Hero />
      <ExperienceContainer />
      <Skills />
      <ProjectContainer  openModal={openModal} setOpenModal={setOpenModal} />
      <Footer />
      {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        }
    </>
  )
}

export default Home
