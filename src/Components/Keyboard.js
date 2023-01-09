import { ReactDOM } from "react";

import '../App.css';
function Keyboard(props){
  
    return (
      <div className="keyboard">
           <button  value="1" onClick={props.onButtonPressed[0]}>1</button>
           <button  value="2"onClick={props.onButtonPressed[0]}>2</button>
           <button  value="3"onClick={props.onButtonPressed[0]}>3</button>
           <button  value="+" onClick={props.onButtonPressed[0]}>+</button>
           <button  value="4"onClick={props.onButtonPressed[0]}>4</button>
           <button value="5"onClick={props.onButtonPressed[0]}>5</button>
           <button  value="6"onClick={props.onButtonPressed[0]}>6</button>
           <button  value="-"onClick={props.onButtonPressed[0]}>-</button>
           <button  value="7"onClick={props.onButtonPressed[0]}>7</button>
           <button  value="8"onClick={props.onButtonPressed[0]}>8</button>
           <button  value="9"onClick={props.onButtonPressed[0]}>9</button>
           <button  value="*"onClick={props.onButtonPressed[0]}>*</button>
           <button onClick={props.onButtonPressed[2]}>reset</button>
           <button  value="0"onClick={props.onButtonPressed[0]}>0</button>
           <button  value="="onClick={props.onButtonPressed[1]}>=</button>
           <button  value="/"onClick={props.onButtonPressed[0]}>/</button>
           
           </div>
    )
}

export default Keyboard ;
