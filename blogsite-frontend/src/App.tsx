import "./App.css";
import { UserContext } from "./contexts/user-context";
import Router from "./router";
import type User from "./types/user-type";

function App() {
  const user: User = { id: 0, loggedIn: false };

  return (
    // UserContext feltöltése értékkel, a Router alkalmazása
    <UserContext.Provider value={user}>
      <Router />
    </UserContext.Provider>
  );
}

export default App;
