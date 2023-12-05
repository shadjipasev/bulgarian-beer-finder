import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import AllBeers from "./components/AllBeers/AllBeers";
import CreateBeer from "./components/Create Beer/CreateBeer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthContext from "./contexts/authContext";
import Catalogs from "./components/Catalogs/Catalogs";
import Details from "./components/Details/Details";
import EditBeer from "./components/EditBeer/EditBeer";
import useLocalSorage from "./hooks/useLocalStorage";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { UserGuard } from "./guards/UserGuard";
import { GuestGuard } from "./guards/GuestGuard";
import { AdminGuard } from "./guards/AdminGuard";
import BeerType from "./components/BeerType/BeerType";

function App() {
  const [user, setAuth] = useLocalSorage("auth", {});

  const setSession = (data) => {
    setAuth({ ...data });
  };

  return (
    <AuthContext.Provider value={{ setSession, user }}>
      <div className="layout">
        <Header />
        <Routes>
          <Route path="/all-beers" element={<AllBeers />}></Route>
          <Route path="/catalogs" element={<Catalogs />}></Route>
          <Route path="/beer-type" element={<BeerType />}></Route>

          <Route path="/details/:beerId" element={<Details />}></Route>

          <Route element={<UserGuard />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>

          <Route element={<GuestGuard />}>
            <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
          </Route>

          <Route element={<AdminGuard />}>
            <Route path="/create" element={<CreateBeer />}></Route>
            <Route path="/edit/:beerId" element={<EditBeer />}></Route>
          </Route>
        </Routes>

        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
