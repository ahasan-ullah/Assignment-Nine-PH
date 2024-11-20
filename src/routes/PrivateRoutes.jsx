import { useContext } from "react";
import { Navigate, useLoaderData, useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import LoadingPage from "../pages/LoadingPage";
const PrivateRoutes=({children})=>{
  const {user,loading}=useContext(AuthContext);
  const location=useLocation();
  if(loading){
    return <LoadingPage></LoadingPage>
  }
  if(user && user?.email){
    return children;
  }
  return(
    <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
  );
}
export default PrivateRoutes;