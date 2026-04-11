import "../App.css";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/slices/clickCntSlice";
import type { RootState } from "../redux/store";
import { useState } from "react";

function Logo(): JSX.Element {
  const dispatch = useDispatch();
  const cnt = useSelector((state: RootState) => state.clickCnt.count);
  const [count, setCnt] = useState<number>(0);

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
            <button onClick={() => setCnt(prev => prev + 1)} className="default-button">
                count is {count}
            </button>
            <button onClick={() => dispatch(increment())} className="default-button">
                count is {cnt}
            </button>
        </div>
    </div>
  );
}

export default Logo;