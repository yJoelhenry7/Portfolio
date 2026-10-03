/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import ProjectCard from "./cards/ProjectCard";

const projects = [
  {
    id: 10,
    title: "Dr Lasya's Derma Glo",
    date: "Jun 2026 - Jul 2026",
    description: "Website for Dr Lasya's Derma Glo",
    image: "",
    tags: ['SEO', 'Tailwind CSS'],
    category: "client work",
    github: "",
    webapp: "https://www.drlasyasdermaglo.com/",
  },
  {
    id: 9,
    title: "Amritha Rehab & Elder Care",
    date: "Jan 2026 - May 2026",
    description: "Website for Amritha Rehab & Elder Care with back-end development and customer relationship management",
    image: "",
    tags: ['Back-End Web Development', 'CRM'],
    category: "client work",
    github: "",
    webapp: "https://amritha-wa-crm.vercel.app/login",
  },
  {
    id: 8,
    title: "MySmile Luxe Dental Lounge",
    date: "Feb 2026 - Apr 2026",
    description: "Professional Dental Lounge Website",
    image: "",
    tags: ['SEO', 'Tailwind CSS'],
    category: "client work",
    github: "",
    webapp: "https://mysmileluxedentallounge.com/",
  },
  {
    id: 7,
    title: "VVR Industries",
    date: "Dec 2025 - Feb 2026",
    description: "Website for VVR Industries with customer relationship management",
    image: "",
    tags: ['Next.js', 'CRM'],
    category: "client work",
    github: "",
    webapp: "https://www.vvrindustries.com/",
  },
  {
    id: 6,
    title: "Core Space Infra",
    date: "Jun 2025 - Jul 2025",
    description: "Construction and Interior Design Website",
    image: "",
    tags: ['SEO', 'Tailwind CSS'],
    category: "client work",
    github: "",
    webapp: "https://www.corespaceinfra.com/",
  },
  {
    id: 1,
    title: "Hospital Management",
    date: "Nov 2023 - Dec 2023",
    description:
      "Hospital Management website to manage the patient data",
    image:
      "/hospital management.jpg",
    tags: ['django','jinja2','css','sqlite'],
    category: "web app",
    github: "https://github.com/yJoelhenry7/HospitalManagement",
    webapp: "https://hospital-management-lime.vercel.app/",
  },
  {
    id: 2,
    title: "SpendSync",
    date: "Sept 2023 - Sept 2023",
    description:
      "Spend Sync is an Expense Tracker which tracks your personal Expenses",
    image:
      "/spend-sync.png",
    tags: ['MongoDB','Express JS','React Js', 'Node JS', 'Context-API'],
    category: "web app",
    github: "https://github.com/yJoelhenry7/SpendSync",
    webapp: "https://spendsync.netlify.app/",
  },
    {
      id: 3,
      title: "Todo Web Application",
      date: "April 2023 - April 2023",
      description:
        "Todo Manager Web App to Track your TODO Tasks",
      image:
        "/todo-manager.jpg",
      tags: ['Express Js', 'Embedded Javascript','Passport Js' ,'PostgreSQL'],
      category: "web app",
      github: "https://github.com/yJoelhenry7/Todo",
      webapp: "https://todo-web-application-unse.onrender.com/",
    },
    {
      id: 4,
      title: "Translate-Mate",
      date: "Feb 2023 - Feb 2023",
      description:
        "Translate Mate is an Andriod app which takes the input text and convert it into preferred Language",
      image:
        "/translate-mate.jpg",
      tags: ['Java','Android Studio','XML','Firebase ML Kit'],
      category: "android app",
      github: "https://github.com/yJoelhenry7/Translate-Mate",
      webapp: "",
    },
    {
      id: 5,
      title: "Shoe Stop",
      date: "Oct 2022 - Nov 2022",
      description:
        "Shoe Stop is an Ecommerce Website which is a online store built specifically for shoes",
      image:
        "/shoe-stop.jpg",
      tags: ['Node Js', 'Express Js', 'Embedded JavaScript(EJS)','Firebase'],
      category: "web app",
      github: "https://github.com/yJoelhenry7/Shoe-Stop",
      webapp: "https://shoe-stop-e-commerce.onrender.com",
    },

    // {
    //   id: 2,
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
    <div className="pt-16 text-white flex justify-center items-center flex-col my-4" style={{background:'linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%)'}}>
        <h1 className="text-4xl m-4 font-bold" id="projects">Projects</h1>
        <p className="w-1/3 text-center opacity-60 mb-3">I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</p>
        <div className="border-purplish border text-purplish rounded-xl flex m-8">
            { toggle === 'all' ? <button className={activeStyle} onClick={() => setToggle('all')}>All </button> : <button className={btnstyle} onClick={() => setToggle('all')}>All </button> }
            <div className="w-0.5 bg-purplish"></div>
            { toggle === 'web app' ? <button className={activeStyle} onClick={() => setToggle('web app')}>WEB APP'S </button> : <button className={btnstyle} onClick={() => setToggle('web app')}>WEB APP'S </button> }
            <div className="w-0.5 bg-purplish"></div>
            { toggle === 'android app' ? <button className={activeStyle} onClick={() => setToggle('android app')}>ANDROID APP'S</button> : <button className={btnstyle} onClick={() => setToggle('android app')}>ANDROID APP'S </button> }
            <div className="w-0.5 bg-purplish"></div>
            { toggle === 'client work' ? <button className={activeStyle} onClick={() => setToggle('client work')}>CLIENT WORK </button> : <button className={btnstyle} onClick={() => setToggle('client work')}>CLIENT WORK </button> }
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-full max-w-6xl px-4 pb-8">
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
