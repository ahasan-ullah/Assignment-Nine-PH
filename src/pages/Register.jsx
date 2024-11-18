import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 md:border">
        <h1 className="text-center font-bold text-4xl mt-10 md:mt-0 md:py-4">
          Register
        </h1>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
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
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
          </div>
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
