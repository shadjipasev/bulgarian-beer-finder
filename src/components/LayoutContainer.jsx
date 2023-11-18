import Main from "./Main";
import Sidebar from "./Sidebar";
import "../styles/layoutcontainer";

export default function LayoutContainer() {
  return (
    <div className="LayoutContainer">
      <Sidebar />
      <Main />
    </div>
  );
}
