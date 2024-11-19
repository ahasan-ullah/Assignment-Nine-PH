import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import LoadingPage from "../pages/LoadingPage";

const Navbar = () => {
  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/profile"}>Profile</NavLink>
    </>
  );
  
  const { user,logout,loading } = useContext(AuthContext);


  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-4"
          >
            {links}
          </ul>
        </div>
        <a className="font-bold text-xl md:text-3xl">Career Hub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg space-x-5">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          <div className="flex space-x-3 items-center justify-center">
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={user.photoURL}
                alt=""
              />
            </div>
            <button
              onClick={logout}
              className="btn text-base md:text-lg bg-orange-500 text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <NavLink
            to={"/auth/login"}
            className="btn text-base md:text-lg bg-orange-500 text-white"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};
export default Navbar;
