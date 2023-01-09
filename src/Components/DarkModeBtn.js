import { ReactDOM } from "react";
import React from "react";
import '../App.css';
function DarkModeBtn(props){
    const [darkMode,setDarkMode]=React.useState(1)
    const handleDarkMode=()=>{
        setDarkMode(!darkMode);
        props.BackGroundHandler(darkMode);
    }
    return (
        <div className="dark-mode">
            <p>Dark Mode</p>
            <label className="switch">
                   <input type="checkbox" onClick={handleDarkMode}></input>
                   <span className="slider round"></span>
            </label>
        </div>
    )
}

export default DarkModeBtn ;
