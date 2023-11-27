import Main from "./Main";
import Sidebar from "./Sidebar";
import "../styles/layoutcontainer.css";

export default function LayoutContainer() {
  return (
    <div className="container">
      <Sidebar />
      <Main />
    </div>
  );
}
