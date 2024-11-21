import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Reset = () => {
  document.title = "Password Reset";
  const { resetPassword,mail } = useContext(AuthContext);
  const [e, setE] = useState("");
  useEffect(() => {
    if(mail){
      setEmail(mail);
    }
  },[mail]);
  
  const handleSend = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email).then(() => {
      toast.success("Password reset email sent", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      window.open("https://mail.google.com/", "_blank");
    });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <form onSubmit={handleSend}>
          <div className="form-control space-y-2">
          <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              value={e}
              onChange={(e) => setE(e.target.value)}
              required
            />
            <button className="btn bg-orange-500 text-white">Send Email</button>
            <Link className="btn bg-orange-500 text-white" to={"/auth/login"}>
              Back
            </Link>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Reset;
