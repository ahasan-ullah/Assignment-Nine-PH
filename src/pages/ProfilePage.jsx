import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleUpdate=()=>{

  }
  return (
    <div className="max-w-lg min-h-screen mx-auto border">
      <div className="flex flex-col items-center justify-center my-8">
        <div>
          <img src={user.photoURL} alt="" />
        </div>
        <h1>{user.email}</h1>
      </div>
      <div>
        <form onSubmit={handleUpdate} className="card-body">
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
          {/* {error.password && (
            <label className="label text-xs text-red-500">
              {error.password}
            </label>
          )} */}
          <div className="mt-6 form-control">
            <button className="btn bg-orange-500 text-white text-lg">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ProfilePage;
