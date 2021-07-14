import React from "react";
import ExpForm from "./ExpForm";
import './NewExp.css'

function NewExp(props){
  const saveDataHandler=(ExpData)=>{
    const dataGen ={
      ...ExpData,
      // id:Math.random().toString()
    };
    props.onAddExp(dataGen);
  };
  return(
    <div className='new-exp'>
      <ExpForm saveData={saveDataHandler}   />
    </div>
  )
}

export default NewExp;
