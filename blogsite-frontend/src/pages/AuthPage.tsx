import { useMediaQuery } from "react-responsive";
import Login from "../components/Login.tsx";
import { useState } from "react";
import Registration from "../components/Registration.tsx";

function AuthPage() {
  const [pageState, setPageState] = useState<"login" | "register">("login");

  const breakpoint1500px = useMediaQuery({ minWidth: 1500 });
  const breakpoint1200px = useMediaQuery({ maxWidth: 1200 });
  const breakpoint855px = useMediaQuery({ maxWidth: 855 });
  const heightBreakpoint655px = useMediaQuery({ maxHeight: 655 });

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

      {/*<div
        className={`${!breakpoint1500px ? "w-full" : "w-[60%]"} bg-primary flex flex-col gap-3 ${heightBreakpoint655px ? "h-full" : "justify-center"} ${breakpoint1200px ? "p-10" : "p-24"} text-gray-light ${breakpoint855px ? "border-none" : "border-l border-l-gray-600"}`}
      >
        {breakpoint855px && <div className="absolute top-5 left-5">Icon</div>}
      </div>*/}

      <div
        className={`${!breakpoint1500px ? "w-full" : "w-[60%]"} bg-primary flex flex-col gap-3 ${heightBreakpoint655px ? "h-full" : "justify-center"} ${breakpoint1200px ? "p-10" : "p-24"} text-gray-light ${breakpoint855px ? "border-none" : "border-l border-l-gray-600"}`}
      >
        {pageState === "login" ? (
          <Login onSwitchToRegister={() => setPageState("register")} />
        ) : (
          <Registration onSwitchToLogin={() => setPageState("login")} />
        )}
      </div>
    </div>
  );
}

export default AuthPage;