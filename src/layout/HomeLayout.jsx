import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="font-titilliium">
      <header className="w-11/12 mx-auto">
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="my-5 w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};
export default HomeLayout;
