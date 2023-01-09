import './App.css';
import DarkModeBtn from './Components/DarkModeBtn';
import Board from './Components/Board';
import React from 'react';


function App() {
  
  const [backGroundColor,setBackGroundColor]=React.useState("rgb(210, 224, 246)")
  const [color,setColor]=React.useState("black")
 
  const handleBackGround=(darkMode)=>{
    darkMode==1?setBackGroundColor("rgb(7, 2, 36)"):
    setBackGroundColor("rgb(210, 224, 246)");
    darkMode==1?setColor("white"):setColor("black");
  
  }
  
   return (
     <div className="App"style={{backgroundColor:backGroundColor,color:color}}>

       <DarkModeBtn BackGroundHandler={handleBackGround}/>
       
       <Board/>
     </div>
   );
  

}


export default App;
