import { useState } from "react";
import Footer from "../components/Footer"
import ProjectContainer from "../components/ProjectContainer"
import Header from "../components/header/Header"
import ProjectDetails from "../components/ProjectDetails";

const Projects = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <>
      <Header />
      <ProjectContainer  openModal={openModal} setOpenModal={setOpenModal} />
      <Footer />
      {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        }
    </>
  )
}

export default Projects
