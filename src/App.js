import logo from "./logo.svg";
import "./App.css";
import AdminHome from "./Pages/AdminHome";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import FeedbackPage from "./Pages/feedbackPage";
import HelpPage from "./Pages/helpPage";
import HistoryPage from "./Pages/historyPage";
import LocationPage from "./Pages/LocationPage";
import ReportPage from "./Pages/ReportPage";
import ScooterPage from "./Pages/ScooterPage";
import SettingPage from "./Pages/settingPage";
import UserPage from "./Pages/userPage";
import AdminLogin from "./Pages/Login";
import Layout from "./Components/Layout";
import StartMqtt from "./Components/Mqtt";
import { useState } from "react";

function App() {
  const [activeScooter, setActiveScooter] = useState();
  const tok = localStorage.getItem("token");
  StartMqtt();

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          
          <Route path="/" element={tok?<AdminHome/> : <AdminLogin/>}/>
          <Route path="/feedback" element={tok?<FeedbackPage /> : <AdminLogin/>} />
      <Route path="/help" element={tok?<HelpPage />: <AdminLogin/>} />
      <Route path="/history" element={tok?<HistoryPage /> : <AdminLogin/>} />
      <Route path="/location" element={tok?<LocationPage /> : <AdminLogin/>} />
      <Route path="/report" element={tok?<ReportPage /> : <AdminLogin/>} />
      <Route path="/scooter" element={tok?<ScooterPage /> : <AdminLogin/>} />
      <Route path="/settings" element={tok?<SettingPage /> : <AdminLogin/>} />
      <Route path="/user" element={tok?<UserPage /> : <AdminLogin/>} />

          <Route
            path="*"
            element={
              tok ? <Navigate to="/" /> : <Navigate to="/login" replace />
            }
          />
           <Route path="/login" element={<AdminLogin />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
