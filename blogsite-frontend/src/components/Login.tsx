import { Link } from "react-router-dom";
import { type ChangeEvent, useState } from "react";
import type UserSignIn from "../types/user-sign-in-type.ts";

function Login() {
  const [userData, setUserData] = useState<UserSignIn>(() => ({
    username: "",
    password: "",
  }));

  const handleClick = () => {
    const values = Object.values(userData).filter((item) => item !== "");

    if (!values) return;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setUserData((prev) => ({ ...prev, [name]: value.trim() }));
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-5xl text-center mb-20">Login</h1>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username or email..."
            onChange={handleChange}
            name="username"
            className="placeholder:tracking-wide outline-1 outline-gray-500 focus:outline-accent focus:outline-offset-1 px-3 py-4 rounded-xl transition-200 hover:outline-gray-400"
          />
          <input
            type="text"
            onChange={handleChange}
            name="password"
            placeholder="Password..."
            className="placeholder:tracking-wide outline-1 outline-gray-500 focus:outline-accent focus:outline-offset-1 px-3 py-4 rounded-xl transition-200 hover:outline-gray-400"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-3">
        <button
          className="py-2.5 rounded-2xl mt-3 bg-accent font-bold tracking-wide cursor-pointer"
          onClick={handleClick}
        >
          Sign in
        </button>

        <Link
          to={"/auth"}
          className="hover:bg-primary-light/10 py-2.5 rounded-2xl font-bold tracking-wide cursor-pointer duration-200"
        >
          <p className="text-center font-bold">Forgot your password?</p>
        </Link>
      </div>

      <button className="py-2.5 outline outline-gray-500 mt-10 rounded-2xl tracking-wide font-semibold duration-200 hover:bg-primary-light/10 cursor-pointer">
        Sign in with Google
      </button>

      <Link to={"/auth/registration"} className="flex flex-col">
        <button className="py-2.5 outline out yline-accent mt-3 rounded-2xl text-accent tracking-wide font-semibold duration-200 hover:bg-primary-light/10 cursor-pointer">
          Create new account
        </button>
      </Link>
    </>
  );
}

export default Login;