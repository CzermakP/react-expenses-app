import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Cell Phone Provider',
    amount: 55.12,
    date: new Date(2019, 7, 14),
  },
  { id: 'e2', 
    title: 'Computer Monitor', 
    amount: 149.49, 
    date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 250.45,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e4',
    title: 'Computer Desk',
    amount: 350,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Groceries',
    amount: 150,
    date: new Date(2021, 5, 17),
  },
  {
    id: 'e6',
    title: 'Udemy: React - A Complete Guide',
    amount: 159,
    date: new Date(2022, 1, 8),
  },
];

const App = () => {
  const [expenses, setExpenses] =  useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2 style={{textAlign: 'center', color: "lightgrey"}}>Patrick Czermak's React Expenses WEB APP...(work in progress)</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
