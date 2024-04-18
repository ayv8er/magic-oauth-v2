import { magic } from "../lib/magic";
import { useNavigate } from "react-router-dom";
import { FaTwitter, FaFacebook, FaDiscord, FaGoogle, FaGithub, FaLinkedin, FaBitbucket, FaTwitch } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const handleEmailOtpLogin = async () => {
    try {
      await magic.wallet.connectWithUI();
      navigate("/email-dashboard");
    } catch (err) {
      console.error(err);
    }
  }

  const handleSocialLogin = async (provider) => {
    try {
      await magic.oauth2.loginWithRedirect({
        provider,
        redirectURI: new URL("/oauth-dashboard", window.location.origin).href,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleGoogleLogin = async () => {
    handleSocialLogin('google');
  }

  const handleTwitterLogin = async () => {
    handleSocialLogin('twitter');
  }

  const handleFacebookLogin = async () => {
    handleSocialLogin('facebook');
  }

  const handleDiscordLogin = async () => {
    handleSocialLogin('discord');
  }

  const handleGithubLogin = async () => {
    handleSocialLogin('github');
  }

  const handleLinkedinLogin = async () => {
    handleSocialLogin('linkedin');
  }

  const handleBitbucketLogin = async () => {
    handleSocialLogin('bitbucket');
  }

  const handleTwitchLogin = async () => {
    handleSocialLogin('twitch');
  }

  return (
    <div className="container">
    <h1>Magic OAuth v2</h1>
      <button onClick={handleEmailOtpLogin}>
        Login with Email OTP
      </button>
      <br />
      <button onClick={handleGoogleLogin}>
        <FaGoogle size={"2.5rem"} />
        Log in with Google
      </button>
      <br />
      <button onClick={handleTwitterLogin}>
        <FaTwitter size={"2.5rem"} />
        Log in with X (Twitter)
      </button>
      <br />
      <button onClick={handleFacebookLogin}>
        <FaFacebook size={"2.5rem"} />
        Log in with Facebook
      </button>
      <br />
      <button onClick={handleDiscordLogin}>
        <FaDiscord size={"2.5rem"} />
        Log in with Discord
      </button>
      <br />
      <button onClick={handleGithubLogin}>
        <FaGithub size={"2.5rem"} />
        Log in with Github
      </button>
      <br />
      <button onClick={handleLinkedinLogin}>
        <FaLinkedin size={"2.5rem"} />
        Log in with LinkedIn
      </button>
      <br />
      <button onClick={handleBitbucketLogin}>
        <FaBitbucket size={"2.5rem"} />
        Log in with Bitbucket
      </button>
      <br />
      <button onClick={handleTwitchLogin}>
        <FaTwitch size={"2.5rem"} />
        Log in with Twitch
      </button>
    </div>
  );
};

export default Login;
