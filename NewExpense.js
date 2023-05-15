import ExpenseForm from "./ExpenseForm"

const NewExpense = (props)=>{
    const saveDataHandler=(enteredData)=>{
        const expenseData = {
            ...enteredData,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    return <div>
        <ExpenseForm onSaveData={saveDataHandler}/>
    </div>
}

export default NewExpense;