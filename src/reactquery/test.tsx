import React, {
    memo,
  useState,
  useMemo,
  useCallback,
  useEffect,
  lazy, Suspense,
  useReducer
} from "react";

import ReactDOM from "react-dom/client";
const styles = {main: {padding: '20px',},title: {color: '#5C6AC4'}, btn: {padding: '10px 20px', cursor: 'pointer', backgroundColor: '#1b11a7', color: '#faf2f2f3', marginRight: '20px', cursor:'pointer'}}
const url = "https://jsonplaceholder.typicode.com/todos"
let timer = 0, timer2 = 0, timer3 = 0, delay = 2000;
let obj = {cnt:0}

const Child = React.memo(({onClick}) => {
    return (
        <button onClick={onClick} style={styles.btn}>Callback {new Date().toLocaleString()}</button>
    )
})

const LazyDemo = () => lazy(()=>{
    return (new Promise((fn)=>{
        setTimeout(()=>{
            return fn({
                default:({str})=>{
                    return <h1>{str}</h1>
                }
            })
        },delay)
    }))
})


const App = () => {
    const [LazyComp, loadingLazyComp] = useState(()=>LazyDemo())
    const reloadComp = ()   =>{   loadingLazyComp(()=>LazyDemo())}

    const [state, dispatch] = useReducer((state, action) => {    
            if(action.type == 'incr'){    
                return {...state, cnt:state.cnt+1}    
            }
            else{    
                return state    
            }    
        },  obj)


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


    const reducerIncr = () => {
        dispatch({type:'incr'})
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
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            }
        };

        fetchData();

        return () => {
            ctrl.abort();
        };
    }, []);


    const handleClick = () =>{
        alert("Callback Clicked")
    }
    //Reducer, debounce, throttle, memo, callback, react.meo, API call


    return (
        <div>
            <h1>Helllo</h1>
            <button onClick={debounce}      style={styles.btn}  >Debounce {debounceCnt}</button>
            <button onClick={throttle}      style={styles.btn}  >Throttle {throttleCnt}</button>
            <button onClick={reducerIncr}   style={styles.btn}  >Increment:{state.cnt}</button>
            <button onClick={reloadComp}    style={styles.btn}  >Reload Component</button>
            <Child  onClick={handleClick} />

            <Suspense fallback={<h1>Loading....</h1>}>
                <LazyComp str="Demo..." />
            </Suspense>
            <ul>
                {
                    Array.isArray(todos) && todos.length>0 ? 
                        todos.map((val, index)=>{
                            return <li key={index}>{val?.title}</li>
                        }):<li>No Data</li>
                }
            </ul>
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