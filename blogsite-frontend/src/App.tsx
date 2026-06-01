import "./App.css";
import { UserContext } from "./contexts/user-context";
import Router from "./router";
import type User from "./types/user-type";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-dark-cyan/theme.css";
import "primeicons/primeicons.css";

function App() {
  const user: User = { id: 0, loggedIn: false };
  return (
    // UserContext feltöltése értékkel, a Router alkalmazása
    <PrimeReactProvider>
      <UserContext.Provider value={user}>
        <Router />
      </UserContext.Provider>
    </PrimeReactProvider>
  );
}

export default App;
