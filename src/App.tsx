import "./App.css";
import ApiHook from "./components/ApiHook";
import BtnHook from "./components/BtnHook";
import Logo from "./components/Logo";
import ProductComponent from "./components/product/Product";
import NotificationApp from "./components/NotificationApp";
import Virtualization from "./components/Virtualization";

function App(): JSX.Element {
  return (
    <div className="app">
      <div className="two-column">
          <div className="left">
            <Logo />
            <BtnHook />
            <ApiHook />
            <hr />
            <NotificationApp />
            <Virtualization />
          </div>
          <ProductComponent />
      </div>
    </div>
  );
}

export default App;