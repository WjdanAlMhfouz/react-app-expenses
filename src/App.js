// import ExpItem from "./components/ExpItem";
import NewExp from "./components/InputForm/NewExp";
import './App.css';
import Exp from "./components/Exp";
import React, {useState} from "react";


//array of object
  const INI_EXPENSES = [{
    title: 'Grocery', amount: '260', date: new Date(2021, 4, 1)
  },
    {title: 'Car Insurance', amount: '290', date: new Date(2021, 5, 1)}
  ];

//JSX file html inside JS
// const app = () =>{} instead of function
function App() {
  const [expenses, setExpenses] = useState(INI_EXPENSES);

  const addExp = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <h1 className='title'>Apps </h1>
      <h2 className='title'>Expenses items </h2>
      {/*components */}
      <NewExp onAddExp={addExp}/>
      <Exp items={expenses}/>

    </div>
  );
}

export default App;
