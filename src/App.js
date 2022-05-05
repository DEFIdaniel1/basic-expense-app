import React, { useState } from "react"; //don't always need to do this anymore, but tells others there is JSX
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import exensnapLogo from './media/expensnap-logo.png';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Some frivolous expense. Whoops!",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e6",
    title: "Bricks. Always need bricks for things.",
    amount: 60,
    date: new Date(2022, 1, 13),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <div className="logo">
        <img className="img" src={exensnapLogo} alt="expensnap logo" />
      </div>
      <h2>It's like SnapChat for your expenses.</h2>
      <h2> Add, refresh, and it's gone!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;