import React, {useState} from 'react'

import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = (props) =>  {
    const[isNotEditing,setEditing] = useState(false)
    const expenseDataHandler = (NewExpenseData) => {
       const newData = {
        ...NewExpenseData
       }

    //    console.log(newData)
       props.onSaveFinalData(newData)
       setEditing(false)
    }

    const EditHandler = () => {
        setEditing(true)
    }

    const StopEditing = () => {
        setEditing(false)
    }

    return <div className='new-expense'>
       {!isNotEditing && <button onClick={EditHandler}>Add Expense</button>}
       {isNotEditing && <ExpenseForm onSaveExpenseData={expenseDataHandler} onCancel={StopEditing}/>}
    </div>
}

export default NewExpense