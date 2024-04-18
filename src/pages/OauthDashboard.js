import { useEffect, useState } from "react";
import { magic } from "../lib/magic";
import { useNavigate } from "react-router-dom";

const OauthDashboard = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const finishSocialLogin = async () => {
    try {
      const result = await magic.oauth2.getRedirectResult();
      console.log('getRedirectResult', result);
      setUser(result);
    } catch (err) {
      console.error(err);
    }
  };

  const printMetadata = async () => {
    try {
      const metadata = await magic.user.getInfo();
      console.log('getInfo', metadata)
    } catch (err) {
      console.error(err);
    }
  };

  const printIsLoggedIn = async () => {
    try {
      const isLoggedIn = await magic.user.isLoggedIn();
      console.log('isLoggedIn', isLoggedIn)
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    finishSocialLogin();
  }, []);

  const logout = async () => {
    try {
      await magic.user.logout();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      {!user && <div className="loading">Loading...</div>}

      {user && (
        <div>
          <h1>Data returned:</h1>
          <pre className="user-info">{JSON.stringify(user, null, 3)}</pre>
        </div>
      )}
      <button className="logout-button" onClick={printIsLoggedIn}>
        isLoggedIn
      </button>
      <br />
      <button className="logout-button" onClick={printMetadata}>
        getInfo
      </button>
      <br />
      <button className="logout-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default OauthDashboard;
