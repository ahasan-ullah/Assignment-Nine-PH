import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

const Login = () => {
  const { setUser, userLogin, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location=useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const pass = form.get("pass");
    userLogin(email, pass)
      .then((result) => {
        setUser(result.user);
        // navigate("/");
        navigate(location?.state ? location.state : "/");
        toast.success("Login Successful", {
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
      })
      .catch(() => {
        toast.error("Please enter valid details", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
  };

  const handleGoogleSignIn=()=>{
    googleSignIn().then(result=>{
      setUser(result.user);
      navigate(location?.state ? location.state : "/");
      toast.success("Login Successful", {
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
    }).catch(()=>{
      toast.error("Please enter valid details", {
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
    })
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 md:border">
        <h1 className="text-center font-bold text-4xl mt-10 md:mt-0 md:py-4">
          Login
        </h1>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="pass"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="mt-6 form-control">
            <button className="btn bg-orange-500 text-white text-lg">
              Login
            </button>
          </div>
        </form>
        <div className="card-body -mt-10">
          <p className="text-center text-gray-500">Or Sign in with</p>
          <button onClick={handleGoogleSignIn} className="btn btn-neutral text-white text-lg">Google</button>
          <p className="text-center mt-6 text-gray-500">
            Don't have any account?{" "}
            <Link to={"/auth/register"} className="text-blue-500 font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
