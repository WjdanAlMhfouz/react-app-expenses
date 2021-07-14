import './ExpDate.css'
function ExpDate(props){
  // object
  const month = props.date.toLocaleString('en-EG', {month: 'long'});
  const day = props.date.toLocaleString('en-EG', {day: '2-digit'});
  const year = props.date.getFullYear();

  return(
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
}
export default ExpDate;
