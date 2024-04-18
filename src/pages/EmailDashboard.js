import { useEffect, useState } from "react";
import { magic } from "../lib/magic";
import { useNavigate } from "react-router-dom";

const EmailDashboard = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const getMetadata = async () => {
    try {
      const metadata = await magic.user.getInfo();
      setUser(metadata);
    } catch (err) {
      console.error(err);
    }
  };

  const printMetadata = async () => {
    try {
      const metadata = await magic.user.getInfo();
      console.log(metadata);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMetadata();
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
          <h1>User Metadata:</h1>
          <pre className="user-info">{JSON.stringify(user, null, 3)}</pre>
        </div>
      )}
      <button className="logout-button" onClick={printMetadata}>
        Print getInfo
      </button>
      <br />
      <button className="logout-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default EmailDashboard;
