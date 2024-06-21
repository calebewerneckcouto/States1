"use client";

import {useState} from "react";


const Page = () => {

    const [count,setCount]= useState(0);
    const [showSecret,setShowSecret]= useState(false);

   

    const handleClickButton =()=>{
      setCount(count + 1);
    }

    const handleClickButton2 =()=>{
        setShowSecret(!showSecret);
    }

    return(

  <div style = {{textAlign:"center"}}>
          <p style = {{display:"flex",textAlign:"center"}}>{count}</p>
          <button onClick={handleClickButton} style = {{display:"flex"}}>+1</button>
          <button onClick={handleClickButton2}  style = {{display:"flex"}}>{showSecret ?'Ocultar': 'Mostrar Area Secreta'}</button>
          {showSecret &&
          <div>àrea Secreta</div>
        }
  </div>
  );
}

export default Page;
