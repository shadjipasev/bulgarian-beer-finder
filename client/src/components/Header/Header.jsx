import { Link, Route, Routes, useNavigate } from "react-router-dom";
import logo_v2 from "../../assets/logo_v2.png";
import "./header.css";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const { user, setSession } = useContext(AuthContext);
  const navigate = useNavigate();
  const isAuth = user?._id ? true : false;
  const isAdmin = user?._id === "656f7b9f5989462a5ee0deba" ? true : false;
  // console.log(user);

  async function logoutHandler() {
    await setSession({});
    localStorage.clear();
    navigate("/all-beers");
  }

  return (
    <header className="head">
      <div className="head__left">
        <img src={logo_v2} alt="" className="head__left__logo" />
        <h3 className="head__left__moto">
          Пенливи изненади за вашите вкусове и портфейл!
        </h3>
      </div>
      {/* <input
        type="text"
        className="head__search"
        placeholder="Потърси любимата си бира.."
      ></input> */}
      <div className="head__right">
        <Link to="/all-beers" className="head__right__nav">
          Всички бири
        </Link>
        <Link to="/" className="head__right__nav">
          Каталози
        </Link>

        {!isAuth && (
          <>
            <Link to="/login" className="head__right__nav">
              Влез
            </Link>
            <Link to="/register" className="head__right__nav">
              Регистрация
            </Link>
          </>
        )}
        {isAdmin && (
          <>
            {" "}
            <Link to="/create" className="head__right__nav">
              Създай бира
            </Link>
          </>
        )}

        {isAuth && (
          <>
            <Link onClick={logoutHandler} className="head__right__nav">
              Излез
            </Link>

            <Link to="/shopping-cart">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="shopping__cart"
              />
            </Link>

            <p>Здравей, {user.username}</p>
          </>
        )}

        {/* Here the user will let the luck choose what beer he will drink */}
        {/* <Link to="/" className="head__right__nav">
          Тото Бира
        </Link> */}
      </div>
    </header>
  );
}
