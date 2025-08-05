import { Link, NavLink } from "react-router-dom";

const DesktopHeader = () => (
  <div className="hidden md:flex items-center space-between w-full mb-2">
    {/* Left links */}
    <div className="flex flex-1 justify-evenly gap-6 text-xl text-white">
      <NavLink to="/">Home</NavLink>
      <a href="/#experience">Experience</a>
    </div>

    {/* Center logo with larger font */}
    <Link
      to="/"
      className="text-5xl mx-8 text-white"
      style={{ fontFamily: "Great Vibes" }}
    >
      Joelhenry.
    </Link>

    {/* Right links */}
    <div className="flex flex-1 justify-evenly gap-6 text-xl text-white">
      <a href="/#skills">Skills</a>
      <a href="/#projects">Projects</a>
    </div>
  </div>
);

export default DesktopHeader
