import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem=(props)=> {
  // const [price,setPrice]=useState(props.price)
  // const changePriceHandler = ()=>{
  //     setPrice(100+'$')
  // }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div>{props.title}</div>
      <div>{props.location} </div>
      <div>{props.price} </div>
      {/* <button className="button" onClick={changePriceHandler}> change price </button> */}
      <button className="button">Delete</button>
    </Card>
  );
}

export default ExpenseItem;
