import React from "react";
import './ExpFilter.css'

const ExpFilter = (props) => {
  const changeHandler = (event) => {
    props.onChangeFilter(event.target.value)
  }

  return (
    <div className='exp-filter'>
      <div className='exp-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={changeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  )

};
export default ExpFilter;
