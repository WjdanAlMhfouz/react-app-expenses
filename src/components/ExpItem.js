// components in react is javascript function
import React,{useState} from "react";
import './ExpItem.css';
import ExpDate from "./ExpDate";

//props is just an attribute
function ExpItem(props) {

  //call only in function  -return array
  const [title, setTitle] = useState(props.title);

  const clickChange = () =>{
    setTitle('New title');
    console.log(title)
  }
  return (
    <div className='item'>
      <ExpDate date={props.date}/>

      <div className='item-title'>{title}</div>

      <div className='item__dec'>
        <div className='item__price'>${props.amout}</div>
      </div>
      <button onClick={clickChange}>Change</button>
    </div>
  );
}

//video 03 - 12
export default ExpItem;
