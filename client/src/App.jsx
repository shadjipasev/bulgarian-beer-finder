import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Link, Route, Routes } from "react-router-dom";
import AllBeers from "./components/AllBeers/AllBeers";
import CreateBeer from "./components/Create Beer/CreateBeer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthContext from "./components/contexts/authContext";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState("auth", {});

  const setSession = (data) => {
    setAuth(data);
  };

  return (
    <AuthContext.Provider value={{ setSession, ...auth }}>
      <div className="layout">
        <Header />
        <Routes>
          <Route path="/all-beers" element={<AllBeers />}></Route>
          <Route path="/create" element={<CreateBeer />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>

        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
