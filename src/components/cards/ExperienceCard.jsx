/* eslint-disable react/prop-types */

const ExperienceCard = ({ experience }) => {
  return (
    <div className="expcard border-blueish border p-4 rounded-xl" style={{ transition: 'all 0.8s ease-in-out 0s'}}>
        <div className="w-full max-w-sm md:w-96 flex items-center gap-2">
            {experience.img && <img className="w-12 rounded-sm" src={experience.img} alt="company logo" />}
            <div className="w-full">
                <p className="expval text-md md:text-lg text-white font-bold opacity-50 break-words">{experience.role}</p>
                <p className="expval text-sm md:text-md text-white font-semibold opacity-50 ">{experience.company}</p>
                <p className="expval text-xs md:text-sm text-white opacity-50">{experience.date}</p>
            </div>
        </div>
        <div className="expval m-4 opacity-50 text-sm md:text-md">
            {experience?.points ? (
                <ul className="list-disc pl-4 space-y-1">
                    {experience.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            ) : (
                experience?.desc && <p>{experience.desc}</p>
            )}
        </div>
        {experience?.skills && (
            <details className="expval m-4 opacity-50 text-sm md:text-md">
                <summary className="cursor-pointer font-bold">Skills ({experience.skills.length})</summary>
                <p className="mt-2">
                    {experience.skills.map((skill, index) => (
                        <span className="p-1 break-words" key={index}>• {skill}</span>
                    ))}
                </p>
            </details>
        )}
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
