import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import OauthDashboard from "./pages/OauthDashboard";
import EmailDashboard from "./pages/EmailDashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/oauth-dashboard" element={<OauthDashboard />} />
          <Route path="/email-dashboard" element={<EmailDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
