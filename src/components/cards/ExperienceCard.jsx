/* eslint-disable react/prop-types */

const ExperienceCard = ({ experience }) => {
  return (
    <div className="expcard border-blueish border p-4 rounded-xl" style={{ transition: 'all 0.8s ease-in-out 0s'}}>
        <div className="w-96 flex items-center gap-2">
            <img className="w-12 rounded-sm" src={experience.img} alt="company logo" />
            <div className="w-full">
                <p className="expval text-md md:text-lg text-white font-bold opacity-50 break-words">{experience.role}</p>
                <p className="expval text-sm md:text-md text-white font-semibold opacity-50 ">{experience.company}</p>
                <p className="expval text-xs md:text-sm text-white opacity-50">{experience.date}</p>
            </div>
        </div>
        <div className="expval m-4 opacity-50 text-sm md:text-md" style={{textOverflow: 'ellipsis'}}>
            <p>{experience?.desc && (
               <span>{experience?.desc}</span>
            )}</p>
        </div>
        <div className="expval m-4 opacity-50 text-sm md:text-md">
          {experience?.skills && (
            <p> 
            <b>Skills:</b>
            {experience?.skills?.map((skill, index) => (
                <span className="p-1 break-words" key={index}>• {skill}</span>
              ))}
            </p>
          )}
        </div>
        <div className="expImg">
        {experience.doc &&
                <a href={experience.doc} target="new">
                    <img className="w-28" src={experience.doc} />
                </a>
            }
        </div>
    </div>
  )
}

export default ExperienceCard

