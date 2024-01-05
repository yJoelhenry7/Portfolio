import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black p-4 flex flex-col justify-center items-center text-white">
       <h1 className="flex items-center gap-2">Made with <span><FaHeart color="red" /></span> by Joel </h1>
       <h1>	&copy; Joel Henry</h1>
    </div>
  )
}

export default Footer
