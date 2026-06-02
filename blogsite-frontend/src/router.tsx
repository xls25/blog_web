import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginRoute from "./routes/LoginRoute";
import LandingRoute from "./routes/LandingRoute";
import AuthPage from "./pages/AuthPage.tsx";
import Login from "./components/Login.tsx";
import Registration from "./components/Registration.tsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* A LandingPage védése */}
        <Route element={<LandingRoute />}>
          <Route path="/" element={<LandingPage />} />
        </Route>

        {/* A LoginPage és későbbi regisztráció védése */}
        <Route element={<LoginRoute />}>
          <Route path="/auth" element={<AuthPage />}>
            <Route path="login" element={<Login />}/>
            <Route path={"registration"} element={<Registration />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
