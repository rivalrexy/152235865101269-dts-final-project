import { auth } from "../services/FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const PrivateRoutes = () => {
  const [user] = useAuthState(auth);

  return user ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
