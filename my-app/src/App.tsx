import React, { JSX } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const PrivateRoute: React.FC<{ element: JSX.Element }> = ({ element }) => {
  return localStorage.getItem("authenticated") ? element : <Navigate to="/" />;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
      </Routes>
    </Router>
  );
};

export default App;
