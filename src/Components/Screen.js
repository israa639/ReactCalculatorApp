import { ReactDOM } from "react";
import '../App.css';
function Screen(props){
     
    return (
      
          <div className="screen">
            <div className="top-layer">
            {props.screenEquation}
           
            </div>
          </div>
            
        
        
    )
}

export default Screen ;
