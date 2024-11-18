import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout=()=>{
  return(
    <div className="font-titilliium">
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