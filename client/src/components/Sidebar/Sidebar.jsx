import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import FolderIcon from "../Icons/FolderIcon";


function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <Navbar />
      <NavLink to="/dashboard">
        <FolderIcon />
      </NavLink>
    </div>
  )
}

export default Sidebar;