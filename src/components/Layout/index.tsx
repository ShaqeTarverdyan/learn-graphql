import { Outlet, NavLink } from "react-router-dom";
import './layout.css'

const Layout = () => {
  return (
    <>
      <nav className="links_wrapper">
            <NavLink to="/create-user" className={({ isActive }) => isActive ? "active" : ""}>new User</NavLink>
            <NavLink to="/users" className={({ isActive }) => isActive ? "active" : ""}>Users</NavLink>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;