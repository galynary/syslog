import React from "react";
import { Routes, Route } from "react-router-dom";
import "@/assets/styles/index.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Home/Home";
import Message from "./pages/Message/Message";
import Setting from "./pages/Setting/Setting";

export const App: React.FC = () => {
  return (
    <div className="syslog">
      <div className="syslog__container">
        <Sidebar />
        <div className="syslog__content">
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/message" element={<Message />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};
