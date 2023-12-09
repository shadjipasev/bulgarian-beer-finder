import { Link } from "react-router-dom";
import "./pageNotFound.css";

export default function PageNotFound() {
  return (
    <div class="section">
      <h1 class="error">404</h1>
      <div class="page">
        Не можем да открием това, което търсите! Защо не се върнете към началото
        и разгледате още вкусни сортове бира?
      </div>
      <Link class="back-home" to={"/"}>
        Към Каталога
      </Link>
    </div>
  );
}
