/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Modal } from '@mui/material';
import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ProjectDetails = ({openModal, setOpenModal}) => {
  const project = openModal?.project;
  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
     <div className='w-full h-full absolute inset-0 text-white flex items-start justify-center overflow-x-scroll pt-12' style={{backgroundColor: '#000000a7'}}>
        <div className='w-full relative p-6 rounded-xl' style={{maxWidth:'800px',background:'rgb(23, 23, 33)'}} >
            <CloseRounded style={{ position: "absolute", top: "10px", right: "20px", cursor: "pointer" }} onClick={() => setOpenModal({ state: false, project: null })} />
            <div className='pt-8 mb-4'>
                <img className='w-full shadow-xl rounded-xl' src={project?.image} alt="Project Screenshot" />
            </div>
            <div className='flex flex-col'>
                <h1 className='text-3xl mb-2 font-semibold'>{project?.title}</h1>
                <h2 className='mb-2 opacity-50'>{project.date}</h2>
                <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags?.map((tag, index) => (
                        <span className="text-purplish text-sm rounded-lg p-1.5" style={{backgroundColor:'rgba(133, 76, 230, 0.082)'}} key={index}>{tag}</span>
                    ))}
                </div>
                <div>
                    <p>{project?.description}</p>
                </div>
                {project.member && (
                 <div className='my-4'>
                    <h1 className='text-xl font-semibold mb-4'>Members</h1>
                    <div>
                        {project?.member.map((member,index) => (
                        <div key={index} className='flex items-center gap-4 my-4'>
                            <img className='w-14 rounded-full' src={member.img} alt="" />
                            <h1 className='w-1/4'>{member.name}</h1>
                                <a href={member.github} target="new" style={{textDecoration: 'none', color: 'inherit'}}>
                                    <GitHub />
                                </a>
                                <a href={member.linkedin} target="new" style={{textDecoration: 'none', color: 'inherit'}}>
                                    <LinkedIn />
                                </a>
                        </div>
                        ))}
                    </div>
                 </div>
                )}
                <div className='flex gap-4 mt-4'>
                    {project?.github && (
                        <button className='w-1/2 p-4 rounded-xl font-semibold' style={{backgroundColor:'rgb(28, 30, 39)'}}><Link to={project?.github} target='_blank'>View Code</Link></button>
                    )}
                  {project?.webapp && (
                        <button className='w-1/2 p-4 rounded-xl font-semibold' style={{backgroundColor:'rgb(133, 76, 230)'}}><Link to={project?.webapp} target='_blank'>View Live App</Link></button>
                    )}
                </div>
            </div>
        </div>
     </div>
    </Modal>
  )
}

export default ProjectDetails
