import ExpenseItem from './ExpenseItem'

import './ExpenseList.css'

const ExpenseList = (props) => {
   if(props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>No Expenses found.</h2>
   }
   if(props.items.length > 0 ) {
    return  props.items.map((expense) => (
        <ul className='expenses-list'>
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.location}
      />
      </ul>
    ))
  }

}

export default ExpenseList