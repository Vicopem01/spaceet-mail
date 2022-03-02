import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing/landing";
import CeoMail from "./pages/NewMail/Ceo/newMail";
import LeadMail from "./pages/NewMail/Growth_Lead/newMail";
import MarketerMail from "./pages/NewMail/Marketer/newMail";
import Login from "./pages/Login/login";
import { createAutoLogout } from "./services/createAutoLogout";

const App = () => {
  const ProtectedRoute = ({ children }) => {
    const validToken = createAutoLogout();
    return validToken ? children : <Navigate replace to="/" />;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/ceo-new-mail"
          element={
            <ProtectedRoute>
              <CeoMail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/growth_lead-new-mail"
          element={
            <ProtectedRoute>
              <LeadMail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/marketer-new-mail"
          element={
            <ProtectedRoute>
              <MarketerMail />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
