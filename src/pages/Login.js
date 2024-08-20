import { useCallback } from "react";
import { magic } from "../lib/magic";
import { useNavigate } from "react-router-dom";
import { 
  FaTwitter, 
  FaFacebook, 
  FaDiscord, 
  FaGoogle, 
  FaGithub, 
  FaLinkedin, 
  FaBitbucket, 
  FaTwitch, 
  FaMicrosoft, 
  FaGitlab 
} from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const handleEmailOtpLogin = useCallback(async () => {
    try {
      const did = await magic.wallet.connectWithUI();
      if (did) navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  }, [navigate]);

  const handleSocialLogin = useCallback(async (provider) => {
    try {
      localStorage.setItem("isOauthRedirect", true);
      await magic.oauth2.loginWithRedirect({
        provider,
        redirectURI: new URL("/dashboard", window.location.origin).href,
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="container">
    <h1>Magic OAuth v2</h1>
      <button onClick={handleEmailOtpLogin}>
        Login with Email OTP
      </button>
      <br />
      <button onClick={() => handleSocialLogin('google')}>
        <FaGoogle size={"2.5rem"} />
        Log in with Google
      </button>
      <br />
      <button onClick={() => handleSocialLogin('twitter')}>
        <FaTwitter size={"2.5rem"} />
        Log in with X (Twitter)
      </button>
      <br />
      <button onClick={() => handleSocialLogin('facebook')}>
        <FaFacebook size={"2.5rem"} />
        Log in with Facebook
      </button>
      <br />
      <button onClick={() => handleSocialLogin('discord')}>
        <FaDiscord size={"2.5rem"} />
        Log in with Discord
      </button>
      <br />
      <button onClick={() => handleSocialLogin('github')}>
        <FaGithub size={"2.5rem"} />
        Log in with Github
      </button>
      <br />
      <button onClick={() => handleSocialLogin('linkedin')}>
        <FaLinkedin size={"2.5rem"} />
        Log in with LinkedIn
      </button>
      <br />
      <button onClick={() => handleSocialLogin('bitbucket')}>
        <FaBitbucket size={"2.5rem"} />
        Log in with Bitbucket
      </button>
      <br />
      <button onClick={() => handleSocialLogin('twitch')}>
        <FaTwitch size={"2.5rem"} />
        Log in with Twitch
      </button>
      <br />
      <button onClick={() => handleSocialLogin('microsoft')}>
        <FaMicrosoft size={"2.5rem"} />
        Log in with Microsoft
      </button>
      <br />
      <button onClick={() => handleSocialLogin('gitlab')}>
        <FaGitlab size={"2.5rem"} />
        Log in with GitLab
      </button>
    </div>
  );
};

export default Login;
