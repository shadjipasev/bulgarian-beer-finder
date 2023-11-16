import { Route, Routes } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header>
      <div className="header__left">
        <img src={logo} alt="" className="left__logo" />
        <h3 className="header__left__moto">
          Пенливи изненади за вашите вкусове и портфейл!
        </h3>
      </div>

      <div className="header__right">
        {/* <Routes>
            
        </Routes> */}
        <a href="" class className="header__right__nav">
          Каталози
        </a>
        <a href="" class className="header__right__nav">
          Магазини
        </a>
        <a href="" class className="header__right__nav">
          Оферти
        </a>
        {/* Here the user will let the luck choose what beer he will drink */}
        <a href="" class className="header__right__nav" />
        Тото Бира
      </div>
    </header>
  );
}
