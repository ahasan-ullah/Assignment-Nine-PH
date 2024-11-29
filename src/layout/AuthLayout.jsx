import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AuthLayout=()=>{
  return(
    <div>
      <header className="font-titilliium w-11/12 mx-auto">
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="font-titilliium w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
export default AuthLayout;