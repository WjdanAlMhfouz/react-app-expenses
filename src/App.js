import ExpItem from "./components/ExpItem";
import NewExp from "./components/InputForm/NewExp";
import './App.css';
import ExpFilter from "./components/InputForm/ExpFilter";
import React, {useState} from "react";


//JSX file html inside JS
// const app = () =>{} instead of function
function App() {
  const [filter, setfilter] = useState('2020');
  const filterHandler = selectedYear => {
    setfilter(selectedYear)
  };
  //array of object
  const expenses = [{
    title: 'Grocery', amount: '260', date: new Date(2021, 4, 1)
  },
    {title: 'car ins', amount: '290', date: new Date(2021, 5, 1)}
  ];

  const addExp = (expense) => {
    console.log(expense)

  }
  return (
    <div>
      <h1 className='title'>Apps </h1>
      <h2 className='title'>Expenses items </h2>
      {/*components */}
      <NewExp onAddExp={addExp}/>

      <ExpFilter selectd={filter} onChangedFilter={filterHandler}/>

      <ExpItem title={expenses[0].title}
               amout={expenses[0].amount}
               date={expenses[0].date}/>

      <ExpItem title={expenses[1].title}
               amout={expenses[1].amount}
               date={expenses[1].date}/>

    </div>
  );
}

export default App;
