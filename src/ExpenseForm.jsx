import React, { useState, useEffect } from "react"

function ExpenseForm({
  onAddExpense,
  onUpdateExpense,
  editingExpense,
  onCancelEdit
}) {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("food")
  const [date, setDate] = useState("")

  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title)
      setAmount(editingExpense.amount)
      setCategory(editingExpense.category)
      setDate(editingExpense.date)
    } else {
      setTitle("")
      setAmount("")
      setCategory("food")
      setDate("")
    }
  }, [editingExpense])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title || !date || !amount) {
      alert("Please fill all the details")
      return
    }

    const expenseData = {
      id: editingExpense
        ? editingExpense.id
        : Date.now(),

      title: title,
      amount: Number(amount),
      category: category,
      date: date
    }

    if (editingExpense) {
      onUpdateExpense(expenseData)
    } else {
      onAddExpense(expenseData)
    }

    setTitle("")
    setAmount("")
    setCategory("food")
    setDate("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="expense-form"
    >

      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Expense amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="shopping">Shopping</option>
        <option value="bills">Bills</option>
        <option value="entertainment">
          Entertainment
        </option>
        <option value="others">Others</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">
        {editingExpense
          ? "Update Expense"
          : "Add Expense"}
      </button>

      {editingExpense && (
        <button
          type="button"
          onClick={onCancelEdit}
        >
          Cancel
        </button>
      )}

    </form>
  )
}

export default ExpenseForm