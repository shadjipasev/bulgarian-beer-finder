import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import LayoutContainer from "./components/LayoutContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="layout">
      <Header />
      <LayoutContainer />
      <Footer />
    </div>
  );
}

export default App;
