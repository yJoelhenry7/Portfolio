/* eslint-disable react/prop-types */

import { SwipeableDrawer } from '@mui/material';
import { CloseRounded, OpenInNew } from '@mui/icons-material';

const RESUME_ID = '1rTp_sAKZUUp0QV1AKYtjPCTF3dkjVZk_';
const PREVIEW_URL = `https://drive.google.com/file/d/${RESUME_ID}/preview`;
const DRIVE_URL = `https://drive.google.com/file/d/${RESUME_ID}/view?usp=sharing`;

const ResumeDrawer = ({ open, setOpen }) => {
  // start below the fixed navbar so the drawer fills the rest of the screen
  const headerHeight = document.querySelector('header')?.offsetHeight ?? 0;

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
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
      sx={{ top: headerHeight, '& .MuiBackdrop-root': { backgroundColor: 'rgba(0,0,0,0.65)' } }}
    >
      <div className="mx-auto mt-4 h-2 w-24 shrink-0 rounded-full bg-white/20" />
      <button
        type="button"
        aria-label="Close"
        onClick={() => setOpen(false)}
        className="absolute top-3 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
      >
        <CloseRounded />
      </button>

      <div className="flex flex-1 min-h-0 flex-col gap-3 p-4 md:px-8 w-full max-w-5xl mx-auto">
        <div className="flex items-center justify-between gap-4 pr-10">
          <h1 className="text-xl md:text-2xl font-semibold">Resume</h1>
          <a href={DRIVE_URL} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-purplish font-semibold hover:underline text-sm">
            <OpenInNew style={{ fontSize: '1.1rem' }} /> Open in Drive
          </a>
        </div>
        {/* only mount the viewer while open so Drive isn't loaded until requested */}
        {open && (
          <iframe
            title="Joel Henry Yellamelli - Resume"
            src={PREVIEW_URL}
            allow="autoplay"
            className="w-full flex-1 min-h-0 rounded-xl border border-white/10 bg-white"
          />
        )}
      </div>
    </SwipeableDrawer>
  )
}

export default ResumeDrawer
