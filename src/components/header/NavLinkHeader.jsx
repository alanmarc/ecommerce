
export const NavLinkHeader = ({ text}) => {
  return (
    <a href="#" className="group relative py-8">
        <span className="group-hover:text-blue-400">{text}</span>
        <span className=" absolute bottom-0 left-0 block h-2 w-full scale-x-0 transition-all duration-500 group-hover:scale-100 group-hover:bg-blue-500"></span>
    </a>
  )
}
