/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import ProjectCard from "./cards/ProjectCard";

const projects = [
    {
      id: 0,
      title: "SpendSync",
      date: "Sept 2023 - Sept 2023",
      description:
        "Spend Sync is an Expense Tracker which tracks your personal Expenses",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-26e36.appspot.com/o/Spend%20Sync.png?alt=media&token=c11bbdd3-42a7-4199-9c98-fdcd4830cce4",
      tags: ['React Js', 'Context-api'],
      category: "web app",
      github: "https://github.com/yJoelhenry7/SpendSync",
      webapp: "https://spendsync.netlify.app/",
    },
    // {
    //   id: 1,
    //   title: "",
    //   date: "",
    //   description:
    //     "",
    //   image:
    //     "",
    //   tags: [],
    //   category: "",
    //   github: "",
    //   webapp: "",
    //   member: [
    //     {
    //       name: "",
    //       img: "",
    //       linkedin: "",
    //       github: "",
    //     },
    //     {
    //       name: "",
    //       img: "",
    //       linkedin: "",
    //       github: "",
    //     },
    //   ],
    // },
  
  ];
  


const ProjectContainer = ({openModal,setOpenModal}) => {
    const [toggle, setToggle] = useState('all');
    const btnstyle ='py-2 px-4'
    const activeStyle = 'py-2 px-4 bg-purplish bg-opacity-40 rounded-md'
  return (
    <div className="pt-16 text-white flex justify-center items-center flex-col" style={{background:'linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%)'}}>
        <h1 className="text-4xl m-4 font-bold">Projects</h1>
        <p className="w-1/3 text-center opacity-60 mb-3">I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</p>
        <div className="border-purplish border text-purplish rounded-xl flex m-8">
            { toggle === 'all' ? <button className={activeStyle} onClick={() => setToggle('all')}>All </button> : <button className={btnstyle} onClick={() => setToggle('all')}>All </button> }
            <div className="w-0.5 bg-purplish"></div>
            { toggle === 'web app' ? <button className={activeStyle} onClick={() => setToggle('web app')}>WEB APP'S </button> : <button className={btnstyle} onClick={() => setToggle('web app')}>WEB APP'S </button> }
            <div className="w-0.5 bg-purplish"></div>
            { toggle === 'android app' ? <button className={activeStyle} onClick={() => setToggle('android app')}>ANDROID APP'S</button> : <button className={btnstyle} onClick={() => setToggle('android app')}>ANDROID APP'S </button> }
            <div className="w-0.5 bg-purplish"></div>
            { toggle === 'machine learning' ? <button className={activeStyle} onClick={() => setToggle('machine learning')}>MACHINE LEARNING </button> : <button className={btnstyle} onClick={() => setToggle('machine learning')}>MACHINE LEARNING </button> }
        </div>
        <div className="flex justify-center items-center flex-wrap w-3/4">
            {toggle === 'all' && projects
                .map((project, index) => (
                <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
            {projects
                .filter((item) => item.category == toggle)
                .map((project, index) => (
                <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                ))}
        </div>
    </div>
  )
}

export default ProjectContainer
