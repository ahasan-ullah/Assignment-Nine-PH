import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
const Register = () => {
  const [error,setError]=useState({});
  const {createNewUser,setUser,updateUserProfile}=useContext(AuthContext);

  const navigate=useNavigate();
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const form=new FormData(e.target);
    const name=form.get("name");
    const email=form.get("email");
    const photo=form.get("photo");
    const pass=form.get("pass");
    if (pass.length < 6) {
      setError({ ...error, password: "Must be at least 6 characters" });
      return;
    }
    setError({ ...error, password: "" });
    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(pass)) {
      setError({ ...error, password: "Must include both uppercase and lowercase letters" });
      return;
    }

    setError({ ...error, password: "" });

    createNewUser(email,pass).then(result=>{setUser(result.user);
      console.log(result.user)
    updateUserProfile({displayName: name, photoURL: photo}).then(()=>navigate("/")).catch(err=>console.log(err));
    }).catch(err=>console.log(err.message,err.code));
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 md:border">
        <h1 className="text-center font-bold text-4xl mt-10 md:mt-0 md:py-4">
          Register
        </h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your Name"
              className="input input-bordered"
              required
            />
          </div>
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
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your Photo URL"
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
          </div>
          {
            error.password && <label className="label text-xs text-red-500">{error.password}</label>
          }
          <div className="mt-6 form-control">
            <button className="btn bg-orange-500 text-white text-lg">
              Register
            </button>
          </div>
          <p className="text-center text-gray-500">Or Sign up with</p>
          <div className="form-control">
            <button className="btn btn-neutral text-white text-lg">
              Google
            </button>
          </div>
          <p className="text-center mt-6 text-gray-500">
            Don't have any account?{" "}
            <Link to={"/auth/login"} className="text-blue-500 font-bold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Register;
