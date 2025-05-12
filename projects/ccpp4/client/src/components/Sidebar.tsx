import { BsTrash } from "react-icons/bs"
import { IoArchiveOutline } from "react-icons/io5"
import { TfiPencilAlt2 } from "react-icons/tfi"
import { NavLink } from "react-router"

export const Sidebar = () => {
  return (
    <article className="bg-secondary w-full h-15 fixed bottom-0 flex items-center">
      <section className="wrapper flex items-center justify-between">
        <NavLink to="/note" className="">
          <TfiPencilAlt2 className="fill-logo" />
          <span className="hidden md:block">Note</span>
        </NavLink>
        <NavLink to="/archive" className="">
          <IoArchiveOutline className="fill-logo" />
          <span className="hidden md:block">Archive</span>
        </NavLink>
        <NavLink to="/trash" className="">
          <BsTrash className="fill-logo" />
          <span className="hidden md:block">Trash</span>
        </NavLink>
      </section>
    </article>
  )
}