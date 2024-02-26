import { magic } from "../lib/magic";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleSocialLogin = async () => {
    try {
      await magic.oauth2.loginWithRedirect({
        provider: "google",
        redirectURI: new URL("/dashboard", window.location.origin).href,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Magic + Google</h1>
      <button onClick={handleSocialLogin}>
        <FcGoogle size={"2.5rem"} />
        Log in with Google
      </button>
    </div>
  );
};

export default Login;
