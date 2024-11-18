import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 md:border">
      <h1 className="text-center font-bold text-4xl mt-10 md:mt-0 md:py-4">Login</h1>
        <form className="card-body">
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
              <span className="label-text">Password</span>
            </label>
            <input
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
            <button className="btn bg-orange-500 text-white text-lg">Login</button>
          </div>
          <p className="text-center text-gray-500">Or Sign in with</p>
          <div className="form-control">
            <button className="btn btn-neutral text-white text-lg">Google</button>
          </div>
          <p className="text-center mt-6 text-gray-500">Don't have any account? <Link to={"/auth/register"} className="text-blue-500 font-bold">Register</Link></p>
        </form>
      </div>
    </div>
  );
};
export default Login;
