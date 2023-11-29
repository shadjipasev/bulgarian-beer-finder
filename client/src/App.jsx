import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Link, Route, Routes } from "react-router-dom";
import AllBeers from "./components/All Beers/AllBeers";
import CreateBeer from "./components/Create Beer/CreateBeer";

function App() {
  return (
    <div className="layout">
      <Header />
      <Routes>
        <Route path="/all-beers" element={<AllBeers />}></Route>
        <Route path="/create" element={<CreateBeer />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
