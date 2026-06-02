import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginRoute from "./routes/LoginRoute";
import LandingRoute from "./routes/LandingRoute";
import AuthPage from "./pages/AuthPage.tsx";

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
          <Route path="/auth" element={<AuthPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
