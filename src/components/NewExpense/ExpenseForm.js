import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /* const [userInput, setUserInput] = useState({
      enteredTitle:'',
      enteredAmount:'',
      enteredDate:'',
  }) */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    //No safer to operate in the last stat snapshot
    /* setUserInput({...userInput,
        enteredTitle: event.target.value,
    }); */

    //If your update depends on the previous state use a function instead
    /* setUserInput((prevState) => {
        return {...prevState, enteredTitle: event.target.title}
    }) */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /* setUserInput({...userInput,
        enteredAmount: event.target.value,
    }); */

    /* setUserInput((prevState) => {
        return {...prevState, enteredAmount: event.target.title}
    }) */
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /*  setUserInput({...userInput,
        enteredDate: event.target.value,
    }); */

    /* setUserInput((prevState) => {
        return {...prevState, enteredDate: event.target.title}
    }) */
  };

  const submitHandler = (event) => {
    //prevent this request be sent
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelForm}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
