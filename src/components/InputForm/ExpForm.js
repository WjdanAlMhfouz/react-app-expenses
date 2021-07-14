import React, {useState} from "react";
import './ExpForm.css'

function ExpForm(props) {
  const [newTitle, setTitle] = useState('');
  const [newAmount, setAmount] = useState('');
  const [newDate, setDate] = useState('');

  //if we used one state we have to update all the object using spread operator
  // const [userInput, setUserInput] = useState({
  //   newTitle: '',
  //   newAmount: '',
  //   newDate: ''
  // });

  const titleChange = (event) => {
    setTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return {...prevState, newTitle: event.target.value};
    // })

  };

  const amountChange = (event) => {
    setAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return {...prevState, newAmount: event.target.value};
    // })

  };

  const dateChange = (event) => {
    setDate(event.target.value);
    // setUserInput((prevState) => {
    //   return {...prevState, newDate: event.target.value};
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const ExpData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate)
    };
    props.saveData(ExpData);
    setTitle('');
    setAmount('');
    setDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-exp__items'>
        <div className='new-exp__item'>
          <label>Title</label>
          <input type='text' value={newTitle} onChange={titleChange}/>
        </div>
        <div className='new-exp__item'>
          <label>Amount</label>
          <input type='number' value={newAmount} min='0.01' step='0.01' onChange={amountChange}/>
        </div>
        <div className='new-exp__item'>
          <label>Date</label>
          <input type='date' value={newDate} min='2019-01-01' max='2022-12-31' onChange={dateChange}/>
        </div>
      </div>
      <div className='new-exp__button'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )

}

export default ExpForm;
