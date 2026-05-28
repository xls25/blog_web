import { createContext } from "react";
import type User from "../types/user-type";

export const UserContext = createContext<User | null>(null); // Maga a UserContext létrehozása, alapértékként a null-t veszi fel