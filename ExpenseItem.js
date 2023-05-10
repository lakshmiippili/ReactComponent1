import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem=(props)=> {
  const [price,setPrice]=useState(props.price)
  const changePriceHandler = ()=>{
      setPrice(100+'$')
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        price={price}
        location={props.location}
      />
      <button className="button" onClick={changePriceHandler}> change price </button>
      <button className="button">Delete</button>
    </Card>
  );
}

export default ExpenseItem;
