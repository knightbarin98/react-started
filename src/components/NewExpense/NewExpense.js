import React, { useState } from "react";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const onCancelHandler = () => {
    setShowForm(false);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  let contentNewExpense = (
    <button type="button" onClick={showFormHandler}>
      Add New Expense
    </button>
  );

  if (showForm === true) {
    contentNewExpense = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseHandler}
        onCancelForm={onCancelHandler}
      />
    );
  }

  return <div className="new-expense">{contentNewExpense}</div>;
  
};

export default NewExpense;
