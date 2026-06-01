import { useState, type ChangeEvent } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import type UserSignIn from "../types/user-sign-in-type";

interface Props {
  getUserData: (newUserData: UserSignIn) => void;
}

export default function SignIn({ getUserData }: Props) {
  const location = useLocation();

  const breakpoint1500px = useMediaQuery({ minWidth: 1500 });
  const breakpoint1200px = useMediaQuery({ maxWidth: 1200 });
  const breakpoint855px = useMediaQuery({ maxWidth: 855 });
  const heightBreakpoint655px = useMediaQuery({ maxHeight: 655 });

  const [isRegistrating] = useState<boolean>(() => {
    return location.pathname.endsWith("registration") ||
      location.pathname.endsWith("registration/")
      ? true
      : false;
  });
  const [userData, setUserData] = useState<UserSignIn>(() => ({
    username: "",
    password: "",
  }));

  const handleClick = () => {
    const values = Object.values(userData).filter((item) => item !== "");

    if (!values) return;

    getUserData(userData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setUserData((prev) => ({ ...prev, [name]: value.trim() }));
  };

  return (
    <div className="w-screen h-screen bg-primary-dark flex justify-between overflow-y-auto">
      <div
        className={`${breakpoint855px ? "hidden" : "flex"} flex-col gap-3 ${heightBreakpoint655px ? "" : "justify-center"} items-center w-full px-5`}
      >
        <h1
          className={`${breakpoint1200px ? "text-4xl" : "text-6xl"} text-gray-light tracking-wide text-center`}
        >
          See the{" "}
          <span className="text-amber-300">
            everyday <br />
            moments
          </span>{" "}
          <br /> of your close friends.
        </h1>

        <img
          className="w-150"
          src="https://static.cdninstagram.com/rsrc.php/yN/r/-erGonz07kB.webp"
          alt="insta lopott kep"
        />
      </div>

      <div
        className={`${!breakpoint1500px ? "w-full" : "w-[60%]"} bg-primary flex flex-col gap-3 ${heightBreakpoint655px ? "h-full" : "justify-center"} ${breakpoint1200px ? "p-10" : "p-24"} text-gray-light ${breakpoint855px ? "border-none" : "border-l border-l-gray-600"}`}
      >
        {breakpoint855px && <div className="absolute top-5 left-5">Icon</div>}

        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-xl">
            {isRegistrating
              ? "Create your fityma account"
              : "Sign in to fityma"}
          </h1>

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
            {isRegistrating ? "Sign up" : "Sign in"}
          </button>

          {!isRegistrating && (
            <Link
              to={"/"}
              className="hover:bg-primary-light/10 py-2.5 rounded-2xl font-bold tracking-wide cursor-pointer duration-200"
            >
              <p className="text-center font-bold">Forgot your password?</p>
            </Link>
          )}
        </div>

        <button className="py-2.5 outline outline-gray-500 mt-10 rounded-2xl tracking-wide font-semibold duration-200 hover:bg-primary-light/10 cursor-pointer">
          Sign in with Google
        </button>

        <Link
          to={isRegistrating ? "/log-in" : "/registration"}
          className="flex flex-col"
        >
          <button className="py-2.5 outline outline-accent mt-3 rounded-2xl text-accent tracking-wide font-semibold duration-200 hover:bg-primary-light/10 cursor-pointer">
            {isRegistrating ? "Sign in" : "Create new account"}
          </button>
        </Link>
      </div>
    </div>
  );
}
