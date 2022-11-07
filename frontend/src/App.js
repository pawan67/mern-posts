import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultPage from "./pages/DefaultPage";
import Login from "./pages/Login";
import RequriedAuth from "./components/private-routes/RequriedAuth";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<RequriedAuth />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
