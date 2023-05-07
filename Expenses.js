import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
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
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
