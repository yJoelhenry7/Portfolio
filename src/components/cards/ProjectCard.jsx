/* eslint-disable react/prop-types */
import { GitHub, OpenInNew } from '@mui/icons-material';

const MAX_TAGS = 4;

const ProjectCard = ({ project, setOpenModal }) => {
  const tags = project.tags ?? [];
  const extraTags = tags.length - MAX_TAGS;

  return (
    <div
      onClick={() => setOpenModal({ state: true, project })}
      className="proCard flex flex-col m-4 bg-navyblue overflow-hidden rounded-2xl cursor-pointer border border-white/10 hover:border-purplish"
      style={{ width: '330px', minHeight: '440px', transition: 'all 0.5s ease-in-out 0s' }}
    >
      {project.image ? (
        <img className="w-full object-cover" style={{ height: '180px' }} src={project.image} alt={project.title} />
      ) : (
        <div
          className="w-full flex items-center justify-center text-center text-xl font-semibold p-4 shrink-0"
          style={{ height: '180px', background: 'linear-gradient(225deg, hsla(271, 100%, 50%, 0.35) 0%, hsla(294, 100%, 50%, 0.15) 100%)' }}
        >
          {project.title}
        </div>
      )}

      <div className="flex flex-col flex-1 gap-3 p-5">
        <div>
          <p className="text-lg text-white font-semibold break-words">{project.title}</p>
          <p className="text-xs text-white opacity-50">{project.date}</p>
        </div>

        <p className="proDesc text-sm text-white opacity-60 !mt-0">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.slice(0, MAX_TAGS).map((tag, index) => (
            <span className="text-purplish text-xs rounded-2xl px-2 py-1" style={{ backgroundColor: 'rgba(133, 76, 230, 0.12)' }} key={index}>{tag}</span>
          ))}
          {extraTags > 0 && (
            <span className="text-white/50 text-xs rounded-2xl px-2 py-1 border border-white/10">+{extraTags}</span>
          )}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-2 text-sm">
          {project.webapp && (
            <a
              href={project.webapp}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-purplish font-semibold hover:underline"
            >
              <OpenInNew style={{ fontSize: '1.1rem' }} /> Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-white opacity-70 hover:opacity-100"
            >
              <GitHub style={{ fontSize: '1.1rem' }} /> Code
            </a>
          )}
          <span className="ml-auto text-white opacity-40 text-xs">View details →</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
