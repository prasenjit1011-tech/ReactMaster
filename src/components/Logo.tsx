import "../App.css";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { useState } from "react";

function Logo(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="left">
        <div>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <div className="card">
            <button onClick={() => setCount(prev => prev + 1)}>
                count is {count}
            </button>
        </div>
    </div>
  );
}

export default Logo;