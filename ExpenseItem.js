import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div>
      <div className="expense-item">
        <div className="expense-item__description">
          <h2>food</h2>
          <div className="expense-item__price">Rs 10</div>
        </div>
      </div>

      <div className="expense-item">
        <div className="expense-item__description">
          <h2>petrol</h2>
          <div className="expense-item__price">Rs 100</div>
        </div>
      </div>
      <div className="expense-item">
        <div className="expense-item__description">
          <h2>movies</h2>
          <div className="expense-item__price">Rs 200</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
