import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout=()=>{
  return(
    <div className="font-titilliium w-11/12 mx-auto">
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}
export default AuthLayout;