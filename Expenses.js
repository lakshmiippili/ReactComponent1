import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
      {/* <ExpenseItem
        date={props.items[0].date}
        title={props.items[0].title}
        price={props.items[0].price}
        location={props.items[0].location}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        price={props.items[1].price}
        location={props.items[1].location}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        price={props.items[2].price}
        location={props.items[2].location}
        date={props.items[2].date}
      ></ExpenseItem> */}
    </Card>
  );
};

export default Expenses;
