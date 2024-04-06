import React,{useState} from "react";


function App(){
    const[number, setNumber]=useState(0);

    /*
    However, as you might recall from the previous section, each render’s state values are fixed, so the value of number inside the first render’s event handler is always 0, no matter how many times you call setNumber(1):

setNumber(0 + 1);
setNumber(0 + 1);
setNumber(0 + 1);
     */
    return(
    <div>
        <h1>{number}</h1>
        <button onClick={() => {
            setNumber(number + 5);
            setNumber(n => n + 1);
            // setNumber(n => n + 1);
            setNumber(42);
        }}>increase the number
        </button>
    </div>
    );
}
export default App;