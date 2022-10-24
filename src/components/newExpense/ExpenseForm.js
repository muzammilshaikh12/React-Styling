import "./ExpenseForm.css";

import React, { useState } from "react";

const ExpenseForm = (props) => {

  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");
  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(EnteredTitle)
  };

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  const printData = (event) => {
      event.preventDefault();
      const data = {
        title: EnteredTitle,
        amount: +EnteredAmount,
        date: new Date(EnteredDate),
        id:Math.random().toString()
      };
      props.onSaveExpenseData(data)
      // console.log(data);
      setEnteredTitle('')
      setEnteredAmount('')
      setEnteredDate('')
     
    };
  
  return (
    <form onSubmit={printData}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"   value={EnteredTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={EnteredAmount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={EnteredDate}
            onChange={dateHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type='button' onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
