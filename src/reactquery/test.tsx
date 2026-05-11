import React, {  useState, useMemo, useCallback } from "react";
import ReactDOM from "react-dom/client";

const styles = {main: {padding: '20px',},title: {color: '#5C6AC4'}, btn: {padding: '10px 20px', cursor: 'pointer', backgroundColor: '#1b11a7', color: '#faf2f2f3', marginRight: '20px', cursor:'pointer'}}
const items: string[]   = ["Apple","Mango","Orange","Grape","WaterMelon","Coconut"];

const Child = React.memo(({onClick, filterData}) => {
    return (
        <div>
            <p>{JSON.stringify(filterData)}</p>
            <button onClick={onClick} style={styles.btn}>Callback Fn {new Date().toLocaleString()}</button>
        </div>
    )
})


const App = () => {
    const [cnt, setCnt] = useState(0);    
    const filterData    = useMemo(()=>{         if(cnt<5){return items}else{return items[cnt%items.length]}},[cnt])
    const handleClick   = useCallback(() =>{    setCnt(0);alert("Callback Clicked")    },[])

    return (
        <div>
            <p>{JSON.stringify(filterData)}</p>
            <button onClick={()=>{setCnt(cnt+1)}}      style={styles.btn}  >Counter : {cnt}</button>
            <Child  onClick={handleClick}   filterData={filterData} />
            <hr />
            <p>useMemo and React.memo: memoizes a computed value, recalculating it only when its dependencies change. without this child will be render when parent re-render</p>
            <p>useCallback : memoizes a function, preventing new function creation on every render unless dependencies change.</p>            
        </div>
    )
}

const rootElement = document.getElementById("root");
if (!rootElement) {  throw new Error("Root element (#root) not found in index.html");   }

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);