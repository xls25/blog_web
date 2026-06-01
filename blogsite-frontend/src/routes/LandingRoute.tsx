import { Navigate, Outlet } from "react-router-dom";
import useUserContext from "../hooks/use-user-context";

export default function LandingRoute() {
    const user = useUserContext();

    // Ha a user nincs bejelentkezve redirectel a /log-in url-re, ha be van, akkor megjelenik a LandingPage

    return !user.loggedIn ? <Navigate to={"/login"} /> : <Outlet />
}