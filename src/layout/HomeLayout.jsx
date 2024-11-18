import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
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
};
export default HomeLayout;
