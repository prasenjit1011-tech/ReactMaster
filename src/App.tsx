import "./App.css";
import Logo from "./components/Logo";
import ProductComponent from "./components/product/Product";
import useButton from "./hooks/useButton";

function App(): JSX.Element {
  const button = useButton();
  const newButton = useButton();

  return (
    <div className="app">
      <div className="two-column">
          
            <button className={`${button.status ? 'btn active-button' : 'btn default-button'}`} onClick={button.handleClick}>
              Custom Hook<br />
              {button.status ? 'Active' : 'Inactive'} : {button.cnt}
            </button>
            <button className={`${newButton.status ? 'btn active-button' : 'btn default-button'}`} onClick={newButton.handleClick}>
              Custom Hook<br />
              {newButton.status ? 'Active' : 'Inactive'} : {newButton.cnt}
            </button>
          
          <Logo />
          <ProductComponent />
      </div>
    </div>
  );
}

export default App;