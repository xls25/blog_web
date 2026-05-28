import { Navigate, Outlet } from "react-router-dom";
import useUserContext from "../hooks/use-user-context";

export default function LoginRoute() {
  const user = useUserContext();

  // Védi az url címeket, a Route fejében van meghívva, ha a user be van jelentkezve és pl a /log-in url címre akarna menni akkor rederictel a LandingPage-re

  return user.loggedIn ? <Navigate to={"/"} /> : <Outlet />;
}
