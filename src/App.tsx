import "./App.css";
import Logo from "./components/Logo";
import ProductComponent from "./components/product/Product";
import useButton from "./hooks/useButton";
import { useState } from "react";

function App(): JSX.Element {
  const button = useButton();
  const newButton = useButton();
  const [layout, setLayout] = useState<'both' | 'left' | 'right'>('both');

  return (
    <div className="app">
      <div className="layout-toggle">
        <button 
          className={`layout-btn ${layout === 'left' ? 'layout-active' : ''}`}
          onClick={() => setLayout('left')}
        >
          ← Left
        </button>
        <button 
          className={`layout-btn ${layout === 'both' ? 'layout-active' : ''}`}
          onClick={() => setLayout('both')}
        >
          Both
        </button>
        <button 
          className={`layout-btn ${layout === 'right' ? 'layout-active' : ''}`}
          onClick={() => setLayout('right')}
        >
          Right →
        </button>
      </div>

      <div className={`two-column layout-${layout}`}>
        <div className="left">
          <button className={`${button.status ? 'layout-btn active-button' : 'layout-btn default-button'}`} onClick={button.handleClick}>
            {button.status ? 'Active' : 'Inactive'} : {button.cnt}
          </button>
          <Logo />
        </div>
        
        <div className="right">
          <button className={`${newButton.status ? 'layout-btn active-button' : 'layout-btn default-button'}`} onClick={newButton.handleClick}>
            {newButton.status ? 'Active' : 'Inactive'} : {newButton.cnt}
          </button>
          <ProductComponent />
        </div>
      </div>
    </div>
  );
}

export default App;