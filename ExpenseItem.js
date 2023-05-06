import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseTitle = 'Petrol'
    const expensePrice = 200
    const expenseLocation = 'delhi'
  return (
    <div>
      <div className="expense-item">
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__location">{expenseLocation}</div>
          <div className="expense-item__price">{expensePrice}</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
