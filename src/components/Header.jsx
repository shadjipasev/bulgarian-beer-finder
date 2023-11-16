import { Route, Routes } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header__left">
        <img src="" alt="" className="left__logo" />
        <h3 className="header__left__moto"></h3>
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
      </div>
    </header>
  );
}
