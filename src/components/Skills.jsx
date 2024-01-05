import SkillContainer from "./SkillContainer"

const Skills = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center text-white" style={{background: 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)', width: '100%', clippath: 'polygon(0px 0px, 100% 0px, 100% 100%, 30% 98%, 0px 100%)'}}>
      <h1 className="text-4xl md:text-5xl font-semibold m-4">Skills</h1>
      <h4 className="text-center md:text-left md:text-md opacity-50">Here are some of my skills on which I have been working on for the past 2 years.</h4>
      <SkillContainer />
    </div>
  )
}

export default Skills
