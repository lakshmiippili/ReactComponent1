import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
  if (props.items.length === 0) return <p className="expenses-list__fallback">No expenses found</p>;
  if (props.items.length === 1) {
    return (
      <div>
        <ul className="expenses-list">
          {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              location={expense.location}
              price={expense.price}
              date={expense.date}
            />
          ))}
        </ul>
        <p>only single expense found, please add more</p>
      </div>
    );
  }

  return (
    <ul>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          location={expense.location}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
