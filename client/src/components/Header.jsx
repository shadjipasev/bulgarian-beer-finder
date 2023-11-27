import { Route, Routes } from "react-router-dom";
import logo_v2 from "../assets/logo_v2.png";
import "../styles/header.css";
export default function Header() {
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
        <a href="" className="head__right__nav">
          Каталози
        </a>
        <a href="" className="head__right__nav">
          Магазини
        </a>
        <a href="" className="head__right__nav">
          Оферти
        </a>
        {/* Here the user will let the luck choose what beer he will drink */}
        <a href="" className="head__right__nav">
          Тото Бира
        </a>
      </div>
    </header>
  );
}
