import SkillContainer from "./SkillContainer"

const Skills = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center text-white">
      <h1 className="text-4xl md:text-5xl font-semibold m-4">Skills</h1>
      <h4 className="text-center md:text-left md:text-md opacity-50">Here are some of my skills on which I have been working on for the past 2 years.</h4>
      <SkillContainer />
    </div>
  )
}

export default Skills
