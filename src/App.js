import ExpItem from "./components/ExpItem";
import './App.css';

//JSX file html inside JS
// const app = () =>{} instead of function
function App() {
  //array of object
  const expenses = [{
    title: 'Grosry', amount: '260', date: new Date(2021, 4, 1)
  },
    {title: 'car ins', amount: '290', date: new Date(2021, 5, 1)}
  ];

  return (
    <div>
      <h1 className='title'>Apps </h1>
      <h2 className='title'>Expenses items </h2>
      {/*components */}
      <ExpItem title={expenses[0].title}
               amout={expenses[0].amount}
               date={expenses[0].date} />

      <ExpItem title={expenses[1].title}
               amout={expenses[1].amount}
               date={expenses[1].date} />


    </div>
  );
}

export default App;
