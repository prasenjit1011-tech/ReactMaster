import "./App.css";
import BtnHook from "./components/BtnHook";
import Logo from "./components/Logo";
import ProductComponent from "./components/product/Product";

function App(): JSX.Element {
  return (
    <div className="app">
      <div className="two-column">
          <div className="left">
            <Logo />
            <BtnHook />
          </div>
          <ProductComponent />
      </div>
    </div>
  );
}

export default App;