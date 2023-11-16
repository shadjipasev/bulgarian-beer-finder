import { Route, Routes } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/header.css";
export default function Header() {
  return (
    <header>
      <div className="head__left">
        <img src={logo} alt="" className="head__left__logo" />
        <h3 className="head__left__moto">
          Пенливи изненади за вашите вкусове и портфейл!
        </h3>
      </div>

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
