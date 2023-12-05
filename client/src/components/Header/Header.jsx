import { Link, Route, Routes } from "react-router-dom";
import logo_v2 from "../../assets/logo_v2.png";
import "./header.css";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const { user, setSession } = useContext(AuthContext);

  console.log(user);

  function logoutHandler() {
    setSession({});
    localStorage.clear();
  }

  return (
    <header className="head">
      <div className="head__left">
        <img src={logo_v2} alt="" className="head__left__logo" />
        <h3 className="head__left__moto">
          Пенливи изненади за вашите вкусове и портфейл!
        </h3>
      </div>
      <input
        type="text"
        className="head__search"
        placeholder="Потърси любимата си бира.."
      ></input>
      <div className="head__right">
        <Link to="/all-beers" className="head__right__nav">
          Магазини
        </Link>
        <Link to="/catalogs" className="head__right__nav">
          Каталози
        </Link>

        <Link to="/create" className="head__right__nav">
          Create
        </Link>

        <Link to="/login" className="head__right__nav">
          Login
        </Link>
        <Link to="/register" className="head__right__nav">
          Register
        </Link>
        <Link onClick={logoutHandler} className="head__right__nav">
          Logout
        </Link>

        <Link to="/shopping-cart" className="head__right__nav">
          <FontAwesomeIcon icon={faShoppingCart} className="shopping__cart" />
        </Link>

        <p>Здравей, {user.username}</p>

        {/* Here the user will let the luck choose what beer he will drink */}
        {/* <Link to="/" className="head__right__nav">
          Тото Бира
        </Link> */}
      </div>
    </header>
  );
}
