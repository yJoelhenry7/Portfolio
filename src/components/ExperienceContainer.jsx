import TimeLine from "./TimeLine"

const ExperienceContainer = () => {
  return (
    <div className="pt-16 flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl m-4 font-bold">Experience</h1>
      <p className="w-1/3 text-center opacity-60 mb-8">My work experience as a software engineer and working on different companies and projects.</p>
      <TimeLine />
    </div>
  )
}

export default ExperienceContainer
