import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import LoginRoute from "./routes/LoginRoute";
import LandingRoute from "./routes/LandingRoute";
import RegistrationPage from "./pages/RegistrationPage";

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
          <Route path="/log-in" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
