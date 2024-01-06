/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// openModal ,setOpenModal

const ProjectCard = ({project,setOpenModal}) => {
  return (
    <div onClick={() => setOpenModal({state: true, project: project})} className="proCard w-full flex flex-col m-4 p-8 gap-8  bg-navyblue overflow-hidden text-ellipsis rounded-xl cursor-pointer" style={{width:'330px' ,height:'490px' , transition: 'all 0.5s ease-in-out 0s'}}>
        <img className="w-full rounded-xl" style={{height: '180px'}} src={project.image} alt="" />
        <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag, index) => (
                <span className="text-purplish text-xs rounded-2xl p-1.5" style={{backgroundColor:'rgba(133, 76, 230, 0.082)'}} key={index}>{tag}</span>
            ))}
        </div>
        <div>
            <p className="expval text-md md:text-lg text-white font-semibold opacity-50 break-words">{project.title}</p>
            <p className="expval text-sm md:text-md text-white opacity-50 ">{project.date}</p>
            <p className="proDesc text-sm md:text-md text-white opacity-50">{project.description}</p>
        </div>
        <div className="flex">
            {project.member?.map((member,index) => (
                <img className="w-10 rounded-full" key={index} src={member.img}/>
            ))}
        </div>
    </div>
  )
}

export default ProjectCard
