import { useContext } from "react"
import { UserContext } from "../contexts/user-context"

export default function useUserContext() {
    const user = useContext(UserContext);

    // A UserContext ellenőrzése, ha null az értéke akkor elszáll a program

    if (user === null) throw new Error("User context must be used within a UserContext.Provider");

    return user;
}