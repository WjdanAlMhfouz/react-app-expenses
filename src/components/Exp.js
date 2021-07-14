import React, {useState} from 'react';
import ExpFilter from "./InputForm/ExpFilter";
import ExpItem from "./ExpItem";

const Expenses = (props) => {
  const [filter, setFilter] = useState('2020');
  const filterHandler = selectedYear => {
    setFilter(selectedYear)
  };
  const filtered = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  })

  return (
    <div className='item'>
      <div className='expenses'>
        <ExpFilter selectd={filtered} onChangeFilter={filterHandler}/>

        {filtered.length === 0 ?
          (<p>No Expense!</p>) : (
            filtered.map((expense, index) => (
              <ExpItem
                key={index}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />))
          )}

      </div>

    </div>

  )
}
export default Expenses;
