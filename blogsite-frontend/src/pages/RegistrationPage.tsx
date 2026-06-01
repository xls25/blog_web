import SignIn from "../components/SignIn";
import type UserSignIn from "../types/user-sign-in-type";

export default function RegistrationPage() {
  const handleNewUserData = (newUserData: UserSignIn) => {
    console.log(`Registration: ${newUserData.username} | ${newUserData.password}`);
  };

  return <SignIn getUserData={handleNewUserData} />;
}
