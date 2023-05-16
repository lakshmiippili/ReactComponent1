import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
  const [toEdit, setToEdit] = useState('false');
  const doEditHandler = () => {
    setToEdit(true);
  };
  const dontEditHandler = () => {
    setToEdit(false);
  };
  const saveDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setToEdit(false);
  };
  return (
    <div className='new-expense'>
      {!toEdit && <button onClick={doEditHandler}>Add New Expense</button>}
      {toEdit && (
        <ExpenseForm onSaveData={saveDataHandler} onCancel={dontEditHandler} />
      )}
    </div>
  );
};

export default NewExpense;
