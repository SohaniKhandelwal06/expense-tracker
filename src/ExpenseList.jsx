function ExpenseList({
  expenses,
  onDeleteExpense,
  onEditExpense
}) {
  if (expenses.length === 0) {
    return <p>No expenses found.</p>
  }

  return (
    <div className="expense-list">

      <h2>My Expense List</h2>

      {expenses.map((expense) => (

        <div
          className="expense-item"
          key={expense.id}
        >

          <div>
            <h3>{expense.title}</h3>

            <p>{expense.category}</p>

            <p>{expense.date}</p>
          </div>


          <div className="expense-right">

            <strong>
              ₹{expense.amount}
            </strong>

            <button
              className="edit-btn"
              onClick={() => onEditExpense(expense)}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() =>
                onDeleteExpense(expense.id)
              }
            >
              Delete
            </button>

          </div>

        </div>

      ))}

    </div>
  )
}

export default ExpenseList