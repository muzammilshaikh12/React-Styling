import Expenses from './components/Expenses/Expenses'

import React , {useState} from 'react'

import NewExpense from './components/newExpense/NewExpense'

const Dummy_Expense = [
  { 
    id:1,
    title: "My Sneakers",
    date: new Date(2020, 9, 12),
    amount: 5000,
    location: "Pune",
  },
  { id:2,
    title: "Hoody",
    date: new Date(2020, 6, 9),
    amount: 2500,
    location: "Bangalore",
  },
  {
    id:3,
    title: "Pizza",
    date: new Date(2021, 8, 12),
    amount: 500,
    location: "Mumbai",
  },
  {
    id:4,
    title: "Clubbing",
    date: new Date(2022, 11, 31),
    amount: 10000,
    location: "Canberra",
  },
];

const App = () => {
  const [expenseArray,setExpenses] = useState(Dummy_Expense)
 const myDataHandler = (expense) => {
    setExpenses(oldExpenses => {
      return [expense, ...oldExpenses]
    })
  }
  return (
    <div>
      <NewExpense onSaveFinalData={myDataHandler}/>
      <Expenses items={expenseArray} />
   </div>
  );
}

export default App;
