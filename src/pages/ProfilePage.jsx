import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from "react-toastify";

const ProfilePage = () => {
  const { user, updateUserProfile2 } = useContext(AuthContext);
  console.log(user);
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUserProfile2({ displayName: name, photoURL: photo })
      .then(() => {
        toast.success("Profile Updated!", {
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
        toast.error("Failed to update user profile", {
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
      });
  };
  return (
    <div className="max-w-lg h-[720px] mx-auto">
      <div className="flex flex-col items-center justify-center my-8 space-y-4">
        <div>
          <img className="w-32 h-32 rounded-full" src={user.photoURL} alt="" />
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
          <div className="mt-6 form-control">
            <button className="btn bg-orange-500 text-white text-lg">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ProfilePage;
