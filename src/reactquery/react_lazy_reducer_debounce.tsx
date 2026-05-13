import ReactDOM from "react-dom/client";
import React, { memo,  useState,  useMemo,  useCallback,  useEffect,  lazy, Suspense,  useReducer   } from "react";

const styles = {main: {padding: '20px',},title: {color: '#5C6AC4'}, btn: {padding: '10px 20px', cursor: 'pointer', backgroundColor: '#1b11a7', color: '#faf2f2f3', marginRight: '20px', cursor:'pointer'}, box:{border:'1px solid #1b11a7', margin:'10px', padding:'20px'}, subbox:{borderTop:'1px solid #1b11a7'} }
const items: string[]   = ["Apple","Mango","Orange","Grape","WaterMelon","Coconut"];
const url = "https://jsonplaceholder.typicode.com/todos"

let timer = 0, timer2 = 0, timer3 = 0, delay = 2000;
let obj = {cnt:0}


const Child = React.memo(({onClick, filterData}) => {
    return (
        <div>
            <p>{JSON.stringify(filterData)}</p>
            <button onClick={onClick} style={styles.btn}>Callback Fn {new Date().toLocaleString()}</button>
        </div>
    )
})


// Custom Hook
const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const resizeFn = () => {    setWidth(window.innerWidth);    };
        window.addEventListener("resize", resizeFn);
        return () => {    window.removeEventListener("resize", resizeFn)};
    }, []);

    return width;
};

const LazyDemo = () => lazy(()=>{
    return (new Promise((fn)=>{
        setTimeout(()=>{
            return fn({
                default:({str})=>{
                    return <h3>{str}-{new Date().toLocaleString()}</h3>
                }
            })
        },delay)
    }))
})


const App = () => {
    const window_width = useWindowWidth();
    const [LazyComp, loadingLazyComp] = useState(()=>LazyDemo())
    const reloadComp = ()   =>{   loadingLazyComp(()=>LazyDemo())}

    const reducerIncr = () =>   { dispatch({type:'incr'}) }
    const [state, dispatch]     = useReducer((state, action) => {    
                if(action.type == 'incr'){
                    return {...state, cnt:state.cnt+1}
                }
                return state                    
            },  {cnt:0})

    const [mystate, mydispatch] = useReducer((newstate, newaction)=>{
        newstate[newaction.name] = newaction.val
        return {...newstate};
    },{fname:'Rohit', mobile:'456789'})


    const [debounceCnt, setDebounceCnt] = useState(0)
    const debounce = () => {
        clearTimeout(timer);
        timer = setTimeout(()=>{setDebounceCnt(debounceCnt+1)},delay)
    }


    const [throttleCnt, setThrottleCnt] = useState(0)
    const throttle = () => {
        timer2 = Date.now();
        if(timer2-timer3>delay){
            setThrottleCnt(throttleCnt+1)
            timer3 = timer2
        }
    }



    const [todos, setTodos] = useState([])
    const [error, setError] = useState("");
    useEffect(() => {
        const ctrl = new AbortController();
        const fetchData = async () => {
            try {
                const res = await fetch(url, {  signal: ctrl.signal });
                if (!res.ok) {    throw new Error("Failed to fetch data");    }
                const data = await res.json();
                setTodos(data);
            } 
            catch (err) {
                // Ignore abort error
                if (err.name !== "AbortError") {    setError(err.message);  }
            }
        };

        fetchData();
        return () => {  ctrl.abort();   };
    }, []);


    const [cnt, setCnt] = useState(0);    
    const filterData    = useMemo(()=>{         if(cnt<5){return items}else{return items[cnt%items.length]}},[cnt])
    const handleClick   = useCallback(() =>{    setCnt(0);alert("Callback Clicked")    },[])
    //Reducer, debounce, throttle, memo, callback, react.meo, API call

    

    return (
        <div style={styles.box}>
            <button onClick={debounce}      style={styles.btn}  >Debounce : {debounceCnt}</button>
            <button onClick={throttle}      style={styles.btn}  >Throttle : {throttleCnt}</button>
            <button onClick={reducerIncr}   style={styles.btn}  >useReducer : {state.cnt}</button>
            <button onClick={reloadComp}    style={styles.btn}  >Lazy Reload Component</button>
            <button style={styles.btn}>Custom Hook : Window Width : {window_width}</button>

            <Suspense fallback={<h1>Lazy Loading....</h1>}>
                <LazyComp str="Lazy Demooooo..." />
            </Suspense>
            <hr />
            <div>
                useReducer : 
                <input type="text" name="fname" value={mystate.fname} 
                    onChange={(e)=>{mydispatch({name:'fname', val:e.target.value})}} /> &nbsp;
                <input type="text" name="mobile" value={mystate.mobile} 
                    onChange={(e)=>{mydispatch({name:'mobile', val:e.target.value})}} />
            </div>
            <hr />
            <ul>
                {
                    Array.isArray(todos) && todos.length>0 ? 
                        todos.slice(0,2).map((val, index)=>{
                            return <li key={index}>{val?.title}</li>
                        }):<li>No Data</li>
                }
            </ul>

            <div style={styles.subbox}>
                <h3>useCallback and useMemo</h3>
                <p>{JSON.stringify(filterData)}</p>
                <button onClick={()=>{setCnt(cnt+1)}}      style={styles.btn}  >Counter : {cnt}</button>
                <Child  onClick={handleClick}   filterData={filterData} />
                <hr />
                <p>useMemo and React.memo: memoizes a computed value, recalculating it only when its dependencies change. without this child will be render when parent re-render</p>
                <p>useCallback : memoizes a function, preventing new function creation on every render unless dependencies change.</p>            
            </div>
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