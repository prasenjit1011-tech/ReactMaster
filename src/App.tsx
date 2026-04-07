import "./App.css";
import Logo from "./components/Logo";
import ProductComponent from "./components/product/Product";

function App(): JSX.Element {

  return (
    <div className="app">
      <div className="two-column">
          <Logo />
          <ProductComponent />
      </div>
    </div>
  );
}

export default App;