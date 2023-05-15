import React,{useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const expensesStatic = [
  { 
    id:'e1',
    title: "food",
    price: 220,
    location: "restaurant",
    date: new Date(2022,12,30)
  },
  {
    id:'e2',
    title: "petrol",
    price: 300,
    location: "HP petrol bunk",
    date: new Date(2023,2,13)
  },
  {
    id:'e3',
    title: "movies",
    price: 250,
    location: "multiplex",
    date:new Date(2023,1,1)
  },
];
const App=()=> {
  const [expensesDynamic, setExpensesDynamic] = useState(expensesStatic)

  const addExpenseHandler =(e)=>{
    setExpensesDynamic((prevExpenses)=>{
      return [e,...prevExpenses]
    })
  }

  return (
        <div>
          <NewExpense onAddExpense={addExpenseHandler}/>
          <Expenses items={expensesDynamic}>  </Expenses>
        </div>
      );
}

export default App;
