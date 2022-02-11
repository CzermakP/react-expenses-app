
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 34.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 225.45,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e4',
      title: 'Computer Desk',
      amount: 350,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Patrick's React Expenses APP ....work in progress!!</h2>
      <NewExpense />
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
