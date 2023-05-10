import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem=(props)=> {
  const deleteHandler = ()=>{
      
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        price={props.price}
        location={props.location}
      />
      <button onClick={deleteHandler}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;
