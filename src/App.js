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
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./Components/Loader/loader";

function App() {
  const [activeScooter, setActiveScooter] = useState();
  const [isLoading, setLoading] = useState(true);
  const tok = localStorage.getItem("token");
  StartMqtt();

  return (
    <AnimatePresence>
      <BrowserRouter>
        {tok ? (
          <Layout>
            <Routes>
              <Route path="/" element={<AdminHome />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/location" element={<LocationPage />} />
              <Route path="/report" element={<ReportPage />} />
              <Route path="/scooter" element={<ScooterPage />} />
              <Route path="/settings" element={<SettingPage />} />
              <Route path="/user" element={<UserPage />} />
            </Routes>
          </Layout>
        ) : (
          <Routes>
            <Route index path="/" element={<AdminLogin />} />
          </Routes>
        )}
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
