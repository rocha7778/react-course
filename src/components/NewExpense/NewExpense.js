import "./NewExpense.css";

import NewExpenseForm from "./NewExpenseForm";

const NewExpense = () => {

  const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
        ... enteredExpenseData,
        id : Math.random.toString()
    }

    console.log (expenseData)
    console.log("Some Extrange")

  }  
  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
