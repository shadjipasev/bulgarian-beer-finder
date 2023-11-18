import "../styles/sidebar.css";

export default function () {
  return (
    <div className="sidebar">
      <div className="sidebar__nav">
        <a href="" className="sidebar__nav__link">
          Каталози
        </a>
        <a href="" className="sidebar__nav__link">
          Магазини
        </a>
        <a href="" className="sidebar__nav__link">
          Оферти
        </a>
        {/* Here the user will let the luck choose what beer he will drink */}
        <a href="" className="sidebar__nav__link">
          Тото Бира
        </a>
      </div>
    </div>
  );
}
