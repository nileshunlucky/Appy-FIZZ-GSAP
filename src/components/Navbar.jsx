import { useState } from "react"
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="navbar h-[60px] flex justify-between items-center px-12 select-none sticky top-0 z-50 bg-black opacity-90">
      <div className="logo">
        <img className="h-[40px] cursor-pointer" src="https://assets.thehansindia.com/hansindia-bucket/2732_appy_fizz.jpg" alt="logo" />
      </div>
      <ul className={`nav-items md:flex ${toggle ? "flex" : "hidden"} gap-5 bg-black
      absolute md:static top-[59px] md:flex-row md:p-0 p-5 flex-col text-center left-0 w-full md:w-auto opacity-90`}>
        <li className="text-bold hover:text-red-500 uppercase cursor-pointer">Home</li>
        <li className="text-bold hover:text-red-500 uppercase cursor-pointer">About</li>
        <li className="text-bold hover:text-red-500 uppercase cursor-pointer">brand ambassador</li>
      </ul>
      <div className="toggle md:hidden">
        <i onClick={() => setToggle(!toggle)} className={`fa-solid fa-${toggle ? "times" : "bars"} text-xl`}></i>
      </div>
    </nav>
  )
}

export default Navbar
