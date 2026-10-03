/* eslint-disable react/prop-types */

import { SwipeableDrawer } from '@mui/material';
import { CloseRounded, GitHub, OpenInNew } from '@mui/icons-material';

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  // keep the project in state on close so the content stays visible during the slide-out animation
  const headerHeight = document.querySelector('header')?.offsetHeight ?? 0;
  const close =() => setOpenModal({ state: false, project });
  const open = () => setOpenModal({ state: true, project });

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={openModal.state}
      onClose={close}
      onOpen={open}
      disableSwipeToOpen
      PaperProps={{
        sx: {
          background: 'rgb(23, 23, 33)',
          color: 'white',
          height: '100%',
          width: '100%',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          border: '1px solid rgba(255,255,255,0.1)',
          borderBottom: 'none',
        },
      }}
      // start below the fixed navbar so the drawer fills the rest of the screen
      sx={{ top: headerHeight, '& .MuiBackdrop-root': { backgroundColor: 'rgba(0,0,0,0.65)' } }}
    >
      {/* drag handle, as in the shadcn drawer */}
      <div className="mx-auto mt-4 h-2 w-24 shrink-0 rounded-full bg-white/20" />
      <button
        type="button"
        aria-label="Close"
        onClick={close}
        className="absolute top-3 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
      >
        <CloseRounded />
      </button>

      <div className="overflow-y-auto p-6 w-full max-w-3xl mx-auto">
        {project?.image && (
          <img className="w-full rounded-xl shadow-xl mb-4" src={project.image} alt={project.title} />
        )}
        <h1 className="text-2xl md:text-3xl mb-1 font-semibold">{project?.title}</h1>
        <h2 className="mb-3 opacity-50 text-sm">{project?.date}</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.tags?.map((tag, index) => (
            <span className="text-purplish text-sm rounded-lg p-1.5" style={{ backgroundColor: 'rgba(133, 76, 230, 0.082)' }} key={index}>{tag}</span>
          ))}
        </div>
        <p className="opacity-80">{project?.description}</p>

        {project?.member && (
          <div className="my-4">
            <h1 className="text-xl font-semibold mb-4">Members</h1>
            {project.member.map((member, index) => (
              <div key={index} className="flex items-center gap-4 my-4">
                <img className="w-14 rounded-full" src={member.img} alt="" />
                <h1 className="w-1/4">{member.name}</h1>
                <a href={member.github} target="_blank" rel="noreferrer"><GitHub /></a>
              </div>
            ))}
          </div>
        )}

        {(project?.github || project?.webapp) && (
          <div className="flex gap-4 mt-6">
            {project?.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl font-semibold" style={{ backgroundColor: 'rgb(28, 30, 39)' }}>
                <GitHub fontSize="small" /> View Code
              </a>
            )}
            {project?.webapp && (
              <a href={project.webapp} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl font-semibold" style={{ backgroundColor: 'rgb(133, 76, 230)' }}>
                <OpenInNew fontSize="small" /> View Live App
              </a>
            )}
          </div>
        )}
      </div>
    </SwipeableDrawer>
  )
}

export default ProjectDetails
