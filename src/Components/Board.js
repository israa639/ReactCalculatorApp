import { ReactDOM } from "react";
import React from "react";
import '../App.css';
import Keyboard from "./Keyboard";
import Screen from "./Screen";
function Board(){
  const [equation, setEquation] = React.useState('0');
  
  const handleButtonPressed=(e)=>{
    setEquation(equation+e.target.value);
    console.log(equation)
  };
  
  const calcEquation=()=>{
   let result=0;
   let previous='+';
    var subString='';
   let sign=1;
    let i=0;
    while(i<equation.length){
      if(equation[i]=='-')
      {sign=-1;
        i+=1;
      }
      
    while(i<equation.length&&equation[i]>='0'&&equation[i]<='9')
    {
      subString+=equation[i];
      i+=1;
    }
    
    var subResult=parseFloat(subString);
     subResult*=parseFloat(sign);
    subString='';
    if(previous=='+')
    {
      result+=subResult;

    }
    else if(previous=='-')
    {
      result-=subResult;
      
    }
    else if(previous=='/')
    {
      result/=subResult;
      
    }
    else{
      result*=subResult;
    }
    previous=i<equation.length?equation[i]:'';
    sign=1;
    i+=1;
  }
    setEquation(result);
  };
  const resetScreen=()=>
    setEquation('');
 
    return (
        <div className="calculator-board">

          <Screen screenEquation={equation}/>
          <Keyboard onButtonPressed={[handleButtonPressed,calcEquation,resetScreen]} />
          
         
        
        </div>
    )
}

export default Board ;
